<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { type User } from "../model/user.ts";


// components
import NavBar from './components/NavBar.vue'


const users = ref([] as User[])

console.log('hello')
console.log(users)

</script>

<template>
  <NavBar />
  <div class="container.is-widescreen">
    <RouterView />
  </div>
  
</template>

