<script setup lang="ts">
  // this import allows you to import typescript objects as props
  import { PropType } from '@vue/composition-api';
  import type { Workout } from '@/model/Workout';
  import { addWorkout, editWorkout } from '@/viewModel/currentuser';
  // takes in a prop to either edit or create a new workout; chooses which to do with a simple v-if statement
  const props = defineProps({
    // text is either 'Create Workout' or 'Edit Workout'
    text: String,
    newWorkout: Object as PropType<Workout>
  })
</script>
  

    
<template>
  
  <button class="button is-link" v-if="text === 'Create Workout'" @on-click="addWorkout(newWorkout)">{{text}}</button>
  <button class="button is-link" v-else-if="text === 'Edit Workout'" @on-click="editWorkout(newWorkout)">{{text}}</button>
</template>