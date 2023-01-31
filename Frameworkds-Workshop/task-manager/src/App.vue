<template>
  <div>
    <Header title="Task Manager"/>
    <TaskForm @callParent="addingTaskByParent" />
    <Status :tasks="tasks"/>
    <TaskContainer @deleteTask="deleteTaskItem" @updateParentEvent="updateTask" :tasks="tasks"/>
  </div>
</template>


<script>
import Header from "./components/Header.vue"
import TaskForm from "./components/TaskForm.vue"
import Status from "./components/Status.vue"
import TaskContainer from "./components/TaskContainer.vue"
export default {
  name:"App",
  components:{
    Header,
    TaskForm,
    Status,
    TaskContainer
  },
  data(){
    return ({
      tasks: [{id:1, text:"Breakfast", done:true},{id:2, text:"Live Code", done:false} ]
    })
  },
  methods:{
    addingTaskByParent(value){
      let task = {id:this.tasks.length+1, text:value, done:false}
      this.tasks.push(task)
    },
    updateTask(id){
      const task = this.tasks.find(item=>item.id===id)
      task.done= !task.done
    },
    deleteTaskItem(id){
      const index = this.tasks.findIndex(item=>item.id===id)
      this.tasks.splice(index,1)
    }
  }
}

</script>


<style scoped>

</style>