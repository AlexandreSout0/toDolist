<template>
    <v-text-field clearable label="Add Task" :rules="rules" @keyup.enter="taskStore.addTask" v-model="taskStore.titleTaskCreating"></v-text-field>
    <ListTasks/>   
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore  } from '@/stores/task';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

const rules = [
    (value) => {
        if (!value || value.length >= 5) return true
        return 'You must enter Task title with mor then 5 characteres'
    },
];

onMounted(() => {
    taskStore.getTasks();
})

</script>