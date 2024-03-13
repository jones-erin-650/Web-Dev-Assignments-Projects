<script setup lang="ts">
  import { ref } from 'vue';
  import { getUsers, getUserWorkouts, type User } from '@/model/User'
  import { type Workout } from '@/model/Workout';
  import { refCurrentUser } from '@/viewModel/currentuser';
  import type { RefSymbol } from '@vue/reactivity';

  // components
  import WorkoutPost from '@/components/WorkoutPost.vue';

    // want to first import the current user using refCurrentUser
    const currentUser = refCurrentUser()

    console.log("current user workouts: " + currentUser.value.userWorkouts.value)
    console.log("current user name: " + currentUser.value.firstName)

    // get the current user's workout array using getUserWorkouts
    const userWorkouts = getUserWorkouts(currentUser.value)
    console.log(userWorkouts)
    
    // pass that in as props for the workout post

</script>

<template>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
  <body>
    <WorkoutPost v-for="workout in userWorkouts" :key="workout.postId"
      :firstName="currentUser.firstName"
      :lastName="currentUser.lastName"
      :email="currentUser.email"
      :profilePicture="currentUser.profilePicture"

      :location="workout.location"

      :distance="workout.distance"
      :distanceUnit="workout.distanceUnit"
      :duration="workout.duration"
      :durationUnit="workout.durationUnit"
      :postId="workout.postId"
      :picture="workout.picture"
      :text="workout.text"
    />
  </body>
</html>
</template>