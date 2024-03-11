<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { type User } from "../model/user";


// components
import NavBar from './components/NavBar.vue'


const users = ref([] as User[])

</script>

<template>
  <NavBar />
  <div class="container.is-widescreen">
    <RouterView />
  </div>
  
</template>

