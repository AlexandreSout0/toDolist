<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="taskStore.showDialogDelete"
        max-width="400"
        persistent
      >  
        <v-card
          prepend-icon="mdi-map-marker"
          title="Are you sure you want delete this task?"
          text="This action can't be reverted ... "
        >
          <template v-slot:actions>
            <v-spacer></v-spacer>
  
            <v-btn color="red-darken-1" variant="elevated" @click="$emit('toogleDelete')">
                No
            </v-btn>
  
            <v-btn color="red-darken-1" variant="outlined" @click="taskStore.deleteTask()">
                Yes
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  import { useTaskStore  } from '@/stores/task';

 const taskStore = useTaskStore();

</script>