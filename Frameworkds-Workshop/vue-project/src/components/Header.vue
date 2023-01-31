<template>
    <header>
        <h2>{{title}}</h2>
    </header>
</template>


<script>
export default {
    name:"Header",
    /* props:["title"] */
    props:{
        title:String
    }
}

</script>

<style scoped>
h2{
    border: 2px solid green;
}
</style>