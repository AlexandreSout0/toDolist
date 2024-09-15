<template>
    <v-text-field clearable label="Add Task" @keyup.enter="addTask" v-model="task.title"></v-text-field>
    <ListTasks :tasks="tasks"/>   
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { ref } from 'vue'

    const tasks = ref([
        {
            title: "Estudar Vue",
            description: "Estudar Vue com Vuetity"
        }
    ]);
    
    const task = ref({
        title: "",
        description: ""
    });

    const addTask = () =>{
        tasks.value.push({
            title: task.value.title,
            description: task.value.description
        })
        task.value.value = {
            title: "",
            description: ""
        }
    }
</script>