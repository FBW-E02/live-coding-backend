<template>
    <div>
        <input type="text" v-model="inputValue" >
        <button @click="addTask()">add task</button>
    </div>
</template>

<script>
export default {
    name:"TaskForm",
    data(){
        return({
            inputValue:""
        })
    },
    methods:{
        addTask(){
            this.$emit("callParent",this.inputValue)
        }
    }
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        padding: 10px;
        border: 2px solid pink;
    }
</style>