<template>
  <div  class="alert-notification">
    <v-alert
      title="Alert Task"
      text="Task created Success!"      
      type="success"
      closable
    ></v-alert>
  </div>  
</template>

<style scoped>

.alert-notification {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  width: 100%;
  padding: 0 35% 0 33%;
}
</style>


