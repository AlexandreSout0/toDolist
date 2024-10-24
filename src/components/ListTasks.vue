<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>General</v-list-subheader>

            <v-list-item v-for="task, index in taskStore.tasks" :key="index" :value="index" @click="taskStore.toggleDoneTask(index)">
                <template v-slot:prepend="{  }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
                <v-list-item-title>{{ task.title}}</v-list-item-title>
                <v-list-item-subtitle> {{task.description}} </v-list-item-subtitle>
                
                    <template v-slot:append>                
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="grey-lighten" icon="mdi-dots-vertical" variante="text" v-bind="props" ></v-btn>                              
                            </template>
                            <v-list>
                                <v-list-item value="1">
                                    <v-list-item-title @click="taskStore.toggleEdit(index)">Editar</v-list-item-title>
                                </v-list-item>
                                <v-list-item value="2">     
                                    <v-list-item-title @click="taskStore.toggleDelete(index)" >Deletar</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>               
                    </template>                
                
            </v-list-item>
        </v-list> 
        <DialogTasksField :dialog="taskStore.showDialogTasksField" :task="taskStore.tasks[taskStore.indexTaskSelected]"/>
        <DialogDelete @toogleDelete="taskStore.toogleDelete" />   
    </div>
</template>

<script setup>
import DialogTasksField from './dialogs/DialogTasksField.vue';
import DialogDelete from './dialogs/DialogDelete.vue';
import { useTaskStore  } from '@/stores/task';

const taskStore = useTaskStore();

</script>