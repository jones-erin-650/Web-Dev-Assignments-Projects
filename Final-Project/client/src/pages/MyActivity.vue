<script setup lang="ts">
  import { ref } from 'vue';
  import { getUsers, getUserWorkouts, type User } from '@/model/User'
  import { type Workout } from '@/model/Workout';
  import { refCurrentUser } from '@/viewModel/currentuser';
  import type { RefSymbol } from '@vue/reactivity';

  // components
  import WorkoutPost from '@/components/WorkoutPost.vue';
  import AddWorkoutModal from '@/components/AddWorkoutModal.vue';
  import BasicButton from '@/components/BasicButton.vue';

  // want to first import the current user using refCurrentUser
  const currentUser = refCurrentUser()

  console.log("current user workouts: " + currentUser.value.userWorkouts.value)
  console.log("current user name: " + currentUser.value.firstName)

  // get the current user's workout array using getUserWorkouts
  const userWorkouts = getUserWorkouts(currentUser.value)
  console.log(userWorkouts)
  
  // pass that in as props for the workout post

  //modal functionality
  let isActive = ref(false);

  // navbar burger functionality
  function toggleModal() {
    isActive.value = !isActive.value;
  }

</script>

<template>

    <div>
      <BasicButton text="Add Workout" color="is-dark" @click="toggleModal"/>
      <AddWorkoutModal :isActive="!isActive" />
      <br>
      <br>
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
    </div>

</template>

