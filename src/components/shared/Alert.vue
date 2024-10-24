<template>
  <div  class="alert-notification">
    <v-alert
      class="animate__animated animate__pulse"
      :type="alert.type"
      :text="alert.text"  
      closable
    ></v-alert>
  </div>  
</template>

<script setup>
  import 'animate.css'
  import { useAlertStore } from '@/stores/alert'; 
  const alert = useAlertStore();
</script>


<style scoped>
  .alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 35% 0 33%;
  }
</style>


