import express from "express"
import mongoose from "mongoose"
import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from "body-parser"
import UserCollection from "./model/UserSchema.js"
import ProductCollection from "./model/ProductSchema.js"
import OrderCollection from "./model/OrderSchema.js"
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs"
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs"
//graphql-upload use to handle files in graphql

const PORT = process.env.PORT || 4000;

//initialize express server
const app = express()
mongoose.set('strictQuery', true);
// connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/graphql-apollo-server" ,()=>console.log("connect to DB !"))


const typeDefs=`#graphql
    scalar Upload
    type User {
        email:String
        password:String
        id:ID
        orders:[Order]
    }
    type File {
        filename:String
        imageUrl:String
    }
    type Order {
        total:Int
        products:[Product]
        userId:ID
    }

    type Product {
        title: String
        price:Int
    }
    type Query {
        users : [User]
        products: [Product]
        user(id:ID): User
        product(id:ID): Product

    }
    type Mutation {
        addUser(email:String,password:String) : User
        updateUser(id:ID, password:String): User
        addProduct(title:String, price:Int): Product
        addOrder(total:Int, products:[ID], userId:ID): Order
        addFile(file:Upload):File
    }
`
const resolvers={
    Upload:GraphQLUpload,
    Query:{
        users: async ()=>{
            const users = await UserCollection.find().populate({
                path:"orders",
                populate:{
                    path:"products",
                    model:"products"
                }
            })
            return users
        },
        products:async ()=>{
            const products = await ProductCollection.find()
            return products
        },
        user: async (parent, args)=>{  
            const user = await UserCollection.findById(args.id).populate({
                path:"orders",
                populate:{
                    path:"products",
                    model:"products"
                }
            })
            return user
        },
        product: async (parent,args)=>{
            const product = await ProductCollection.findById(args.id)
            return product
        }

    },
    Mutation:{
        addUser: async (parent,args)=>{
            const user = new UserCollection(args)
            await user.save()
            return user;
        },
        addProduct:async(parent,args)=>{
            const product = new ProductCollection(args)
            await product.save()
            return product;
        },
        updateUser:async (parent,args)=>{
            const updatedUser = await UserCollection.findByIdAndUpdate(args.id, {password:args.password}, {new:true})
            return updatedUser
        },
        addOrder:async (parent,args)=>{
            const order = new OrderCollection(args)
            await order.save()
            const user = await UserCollection.findById(args.userId)
            user.orders.push(order._id)
            await user.save()
            return order
        },
        addFile:async(parent,args)=>{
            console.log(args)
            return {filename:"sfdf",imageUrl:"sfafdsdf"}
        }
    }
}



//setup Apollo Server
const server = new ApolloServer({
    typeDefs, resolvers
})


async function connectServer(){
    await server.start()
    app.use("/graphql",graphqlUploadExpress(),bodyParser.json(), expressMiddleware(server , {context:({req})=>req}))

    app.listen(PORT, ()=>console.log("server is running on PORT :",PORT))
}

connectServer()

