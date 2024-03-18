<script setup lang="ts">
  import StatisticsBlock from '@/components/Workout-Components/StatisticsBlock.vue';
  import { getTodaysWorkouts, getWeeksWorkouts } from '@/model/statistics';
  import { refCurrentUser } from '@/viewModel/currentuser';

  const currentUser = refCurrentUser()

  const todaysWorkouts = getTodaysWorkouts(currentUser.value)
  console.log("todaysWorkouts: " + todaysWorkouts)
  const thisWeeksWorkouts = getWeeksWorkouts(currentUser.value)




</script>

<template>

<body>
  <div>
    <StatisticsBlock :text="'Today'" :workouts="todaysWorkouts"/>
    <hr>
    <StatisticsBlock :text="'This Week'" :workouts="thisWeeksWorkouts"/>
    <hr>
    <StatisticsBlock :text="'All Time'" :workouts="currentUser.userWorkouts"/>
  </div>
</body>

</template>../components/Workout-Components/WorkoutPost.vue