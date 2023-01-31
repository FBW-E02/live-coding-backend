<template>
    <div>
        <h2>{{name.first}} {{name.last}}</h2>
        <h3>{{state}}</h3>
        <p>{{email}}</p>
        <img :src="picture.large" alt=""> 
        <br>
        <button @click="getRandomUser()">Get Random User</button>
    </div>
</template>


<script>
    export default {
        name:"User",
        methods:{
           async getRandomUser(){
                const res = await fetch("https://randomuser.me/api")
                const data = await res.json()
                this.name.first=data.results[0].name.first
                this.name.last=data.results[0].name.last
                this.state=data.results[0].state
                this.email=data.results[0].email
                this.picture.large=data.results[0].picture.large
            }
        },
        data(){
            return {
                name: {
                    first: "",
                    last: ""
                        },
                state: "",
                email: "",
                picture: {
                        large: "",
                        },
            }
        },
        async created(){
                 const res = await fetch("https://randomuser.me/api")
                const data = await res.json()
                this.name.first=data.results[0].name.first
                this.name.last=data.results[0].name.last
                this.state=data.results[0].state
                this.email=data.results[0].email
                this.picture.large=data.results[0].picture.large
        }
       /*  beforeCreate(){
            console.log("before creation")
        },
        created(){
            console.log("once it is created")
        },
        beforeMount(){
            console.log("before mounting")
        },
        mounted(){
            console.log("mounted")
        },
        beforeUnmount(){
            console.log("before unmount")
        } */
    }
</script>


<style scoped>

</style>