<script setup lang="ts">
import { ref } from 'vue';

// components
import WorkoutPost from '../components/WorkoutPost.vue'
import WelcomeMessage from '../components/WelcomeMessage.vue'


</script>

<template>
  <!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
  </head>
<body>
    <div class="columns ">
    <!-- broken down into three horizontal columns, middle one being half the screen -->
    <!-- welcome back message -->
      <div class="column">
          <WelcomeMessage />
      </div>
      <!-- [part with the posts] -->
      <div class="column is-half ">
        <WorkoutPost />
      </div>

      <div class="column">
          third
      </div>
    </div>  
</body>
</html>
</template>