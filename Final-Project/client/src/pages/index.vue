<script setup lang="ts">
  import StatisticsBlock from '@/components/Activity-Components/StatisticsBlock.vue';
  import { getTodaysActivities, getWeeksActivities } from '@/model/statistics';
  import { refCurrentUser } from '@/viewModel/currentuser';

  const currentUser = refCurrentUser()

  const todaysActivities = getTodaysActivities(currentUser.value)
  const thisWeeksActivities = getWeeksActivities(currentUser.value)
  console.log("This weeks activities: " + thisWeeksActivities)



</script>

<template>

<body>
  <div>
    <StatisticsBlock :text="'Today'" :activities="todaysActivities"/>
    <hr>
    <StatisticsBlock :text="'This Week'" :activities="thisWeeksActivities"/>
    <hr>
    <StatisticsBlock :text="'All Time'" :activities="currentUser.userActivities"/>
  </div>
</body>

</template>../components/Activity-Components/ActivityPost.vue