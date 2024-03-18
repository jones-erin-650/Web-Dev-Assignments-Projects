<script setup lang="ts">
  import { ref } from 'vue';
  import { type User, getUsers } from '@/model/User'
  import { refCurrentUser } from '@/viewModel/currentuser';
  
  // used to make sure that the current user's workouts aren't being shown with the friends' workouts
  const currentUser = refCurrentUser()

  //imports user array
  const users = ref([] as User[]) 
  users.value = getUsers()

  // components
  import WorkoutPost from '@/components/Workout-Components/WorkoutPost.vue';
</script>

<template>

  <div>
    
    <div v-for="user in users" :key="user.id">
      <WorkoutPost v-if="user!=currentUser" v-for="workout in user.userWorkouts" :key="workout.workoutID"
        :user="user"
        :workout="workout"
      />
      <hr>
    </div>
  </div>

</template>


