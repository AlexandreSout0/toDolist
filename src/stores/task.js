import { defineStore } from 'pinia'

export const useTaskStore = defineStore( 'task', {
    state: () => ({
        tasks:[
            
            {
                title: "Estudar Vue",
                description: "Estudar Vue com Vuetity"
            },
            {
                title: "Ler Documentação",
                description: "Estudar com Documentação Vue"
            }
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTasksField: false

    }),
    actions:{
        addTask(){
            this.tasks.push({
                title: this.titleTaskCreating
            })
            this.titleTaskCreating=""
            this.saveLocalData
        },
        toggleDelete(index){
            this.showDialogDelete = !this.showDialogDelete;
            if(index != null) this.indexTaskSelected = index;
        },
        deleteTask () {
            this.tasks.splice(this.indexTaskSelected,1)
            this.toggleDelete();
            this.saveLocalData;
        },
        toggleEdit(index){
            this.showDialogTasksField = !this.showDialogTasksField;
            if(index != null){
                this.indexTaskSelected = index;
            }
            this.saveLocalData
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
