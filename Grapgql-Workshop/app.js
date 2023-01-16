import express from "express"
import mongoose from "mongoose"
import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from "body-parser"
import UserCollection from "./model/UserSchema.js"
import ProductCollection from "./model/ProductSchema.js"


const PORT = process.env.PORT || 4000;

//initialize express server
const app = express()
mongoose.set('strictQuery', true);
// connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/graphql-apollo-server" ,()=>console.log("connect to DB !"))


const typeDefs=`#graphql
    type User {
        email:String
        password:String
        id:ID
        orders:[ID]
    }
    type Order {
        total:Int
        products:[ID]
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
    }
`
const resolvers={
    Query:{
        users: async ()=>{
            const users = await UserCollection.find()
            return users
        },
        products:async ()=>{
            const products = await ProductCollection.find()
            return products
        },
        user: async (parent, args)=>{  
            const user = await UserCollection.findById(args.id)
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
        }
    }
}



//setup Apollo Server
const server = new ApolloServer({
    typeDefs, resolvers
})


async function connectServer(){
    await server.start()
    app.use("/graphql",bodyParser.json(), expressMiddleware(server , {context:({req})=>req}))

    app.listen(PORT, ()=>console.log("server is running on PORT :",PORT))
}

connectServer()

