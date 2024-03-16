<script setup lang="ts">
  import { ref } from 'vue';
  import { getUserWorkouts, type User, getUsers } from '@/model/User'
  

  //imports user array
  const users = ref([] as User[]) 
  users.value = getUsers()

  // components
  import WorkoutPost from '@/components/Workout-Components/WorkoutPost.vue';
</script>

<template>

  <div>
    
    <div v-for="user in users" :key="user.id">
      <WorkoutPost v-for="workout in user.userWorkouts" :key="workout.postId"
        :user="user"
        :workout="workout"
      />
    </div>
  </div>

</template>


