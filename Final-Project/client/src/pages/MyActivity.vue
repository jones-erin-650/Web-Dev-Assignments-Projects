
<script setup lang="ts">
  import {  ref } from 'vue';

  
  // components
  import MyActivityBuffer from '@/components/Activity-Components/MyActivityBuffer.vue';

  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }
</script>

<template>
  <div>
    <MyActivityBuffer />  
  </div>
</template>