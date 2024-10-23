<template>
    <v-text-field clearable label="Add Task" @keyup.enter="taskStore.addTask" v-model="taskStore.titleTaskCreating"></v-text-field>
    <ListTasks/>   
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore  } from '@/stores/task';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

onMounted(() => {
    taskStore.getTasks();
})

</script>