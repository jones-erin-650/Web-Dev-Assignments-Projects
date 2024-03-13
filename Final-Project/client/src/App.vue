<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { type User } from "../model/user";

// components
import NavBar from './components/NavBar.vue'

// without this the entire thing just stopped working cause the window loaded too soon
window.onload = function() {
  //your code here
  const users = ref([] as User[])

  // currentUser is declared here right now, probably won't be stored here permenantly
  const currentUser = ref();
  currentUser.value = null;
};



</script>

<template>
  <div>
    <NavBar />
    <!-- this column is just here to add some space between the navbar and page view, not a good solution but it is a solution -->
    <div class="column"></div>
    <div class="container.is-widescreen">
      <RouterView />
    </div>
  </div>
  
</template>

