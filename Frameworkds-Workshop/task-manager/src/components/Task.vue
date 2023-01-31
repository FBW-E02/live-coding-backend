<template>
    <li @click="this.$emit('updateEvent',task.id)" style="padding:10px;" :style="task.done?'border-left:10px solid green': 'border-left:10px solid orange'">{{task.text}} <button @click="(e)=>deleteTaskItem(e,task.id)">delete</button></li>
</template>


<script>


export default {
    name:"Task",
    props:{
        task:Object
    },
    methods:{
        deleteTaskItem(e,id){
            e.stopPropagation()
            this.$emit("deleteMyTask",id)
        }
    }
}
</script>
