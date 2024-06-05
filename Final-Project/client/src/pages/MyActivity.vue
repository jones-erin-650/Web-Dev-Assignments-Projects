
<script setup lang="ts">
  import {  ref } from 'vue';

  
  // components
  import ListUserActivities from '@/components/Activity-Components/ListUserActivities.vue';

  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }
</script>

<template>
  <div>
    <ListUserActivities />  
  </div>
</template>