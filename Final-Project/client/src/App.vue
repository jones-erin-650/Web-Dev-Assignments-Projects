<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { type User } from "../model/user";


// components
import NavBar from './components/NavBar.vue'


</script>

<template>
  <div>
    <NavBar />
    <!-- this column is just here to add some space between the navbar and page view, not a good solution but it is a solution -->
    <div class="column"></div>
    <div class="container.is-widescreen">
      <!-- these columns set the current page's router view in the middle of the page, this way we don't have to retype this in every page -->
      <div class="columns">
        <div class="column"></div>
        <div class="column is-10">
          <RouterView />
        </div>
        <div class="column"></div>
      </div>
      
    </div>

  </div>
  
</template>

