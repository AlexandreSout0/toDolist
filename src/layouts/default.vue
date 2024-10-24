<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <View />
  </v-app>
</template>

<script setup>
  import View from './View.vue'
  import Alert from '@/components/shared/Alert.vue'
  
  import { useAlertStore } from '@/stores/alert';
  const alertStore = useAlertStore();

</script>
