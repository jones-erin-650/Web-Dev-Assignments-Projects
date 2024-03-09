<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

// components
import NavBar from './components/NavBar.vue'


const users = ref([] as User[])

  users.value = [{
    id: 1,
    name: 'Erin Jones',
    isAdmin: true,
  
  }]

</script>

<template>
  <NavBar />
  
  <RouterView />
</template>

