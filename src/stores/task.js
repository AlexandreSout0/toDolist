import { defineStore } from 'pinia'
 import { useAlertStore } from '@/stores/alert'
 const alert = useAlertStore();

export const useTaskStore = defineStore( 'task', {
    state: () => ({
        tasks:[
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTasksField: false
    }),
    actions:{
        addTask(){
            if(this.titleTaskCreating.length <= 5) return
            this.tasks.push({
                title: this.titleTaskCreating
            })
            this.titleTaskCreating = ""
            this.saveLocalData()
            alert.notifyAlert();
        },
        toggleDelete(index){
            this.showDialogDelete = !this.showDialogDelete;
            if(index != null) this.indexTaskSelected = index;
        },
        deleteTask () {
            this.tasks.splice(this.indexTaskSelected, 1)
            this.toggleDelete();
            this.saveLocalData()  // Corrigido: adicionado parênteses
        },
        toggleEdit(index){
            this.showDialogTasksField = !this.showDialogTasksField;
            if(index != null){
                this.indexTaskSelected = index;
            }
            this.saveLocalData()  // Corrigido: adicionado parênteses
        },
        saveLocalData(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        getTasks(){
            let itens = localStorage.getItem('tasks')
            if(itens){
                this.tasks = JSON.parse(itens);
            }
        }
    }
})
