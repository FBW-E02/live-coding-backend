<template>
    <h1 class="header">{{title}}</h1>
</template>

<script>
import "../styles/Header.css"
export default {
    name:"Header",
    props:{
        title:String
    }
}
</script>
