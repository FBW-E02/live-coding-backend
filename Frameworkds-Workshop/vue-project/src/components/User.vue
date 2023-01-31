<template>
    <div>
        <h2>{{name.first}} {{name.last}}</h2>
        <h3>{{state}}</h3>
        <p>{{email}}</p>
        <img :src="picture.large" alt="">
        <button>Get Random User</button>
    </div>
</template>


<script>
    export default {
        name:"User",
        data(){
            return {
                name: {
                    first: "Živojin",
                    last: "Jović"
                        },
                state: "South Bačka",
                email: "zivojin.jovic@example.com",
                picture: {
                        large: "https://randomuser.me/api/portraits/men/65.jpg",
                        },
            }
        }
    }
</script>


<style scoped>

</style>