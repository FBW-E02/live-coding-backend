<template>
    <div class="main">
        
        <div class="left"><progress :value="tasks.filter(task=>!task.done).length" max="10"></progress> <h2>{{tasks.filter(task=>!task.done).length }}</h2></div>
        <div class="right">
            <progress :value="tasks.filter(task=>task.done).length" max="10"></progress>
            <h2>{{tasks.filter(task=>task.done).length }}</h2></div>
    </div>
</template>

<script>


export default {
name:"Status",
props:{
    tasks:Array
}
}
</script>

<style scoped>
    .main{
        display: flex;
        justify-content: center;


    }
    .main>div{
        width: 100px;
        height: 100px;
        border: 5px solid greenyellow;
        border-radius: 20%;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 5px;
    }
</style>