<template>
    <div>
        <h2>Tasks Container</h2>
        <h3 v-if="tasks.length===0">No task in the task manager</h3>
        <h3 v-else>we have {{tasks.length}} task </h3>
        <ul v-bind:key="task.id" v-for="task in tasks">
            <Task @deleteMyTask="(id)=>this.$emit('deleteTask',id)" @updateEvent="(id)=>this.$emit('updateParentEvent',id)" :task="task"/>
        </ul>
        
    </div>
</template>


<script>
import Task from "./Task.vue"
export default {
name:"TaskContainer",
components:{
    Task
},
props:{
    tasks:Array
}
}
</script>
