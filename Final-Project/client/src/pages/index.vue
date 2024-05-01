<script setup lang="ts">
  import StatisticsBlock from '@/components/Activity-Components/StatisticsBlock.vue';
import { getUserActivities } from '@/model/User';
  import { getTodaysActivities, getWeeksActivities } from '@/model/statistics';
  import { refSession } from '@/viewModel/session'

  const session = refSession()
  const userActivities = getUserActivities(session.user!)

  const todaysActivities = getTodaysActivities(session.user!)
  const thisWeeksActivities = getWeeksActivities(session.user!)
  console.log("This weeks activities: " + thisWeeksActivities)



</script>

<template>

<body>
  <div>
    <StatisticsBlock :text="'Today'" :activities="todaysActivities"/>
    <hr>
    <StatisticsBlock :text="'This Week'" :activities="thisWeeksActivities"/>
    <hr>
    <StatisticsBlock :text="'All Time'" :activities="userActivities"/>
  </div>
</body>

</template>../components/Activity-Components/ActivityPost.vue