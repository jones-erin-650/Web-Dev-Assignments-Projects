<script setup lang="ts">
  import StatisticsBlock from '@/components/Activity-Components/StatisticsBlock.vue';
  import { getActivities, type Activity } from '@/model/Activity';
  import { filterUserActivities } from '@/model/User';
  import { getTodaysActivities, getWeeksActivities } from '@/model/statistics';
  import { refSession } from '@/viewModel/session'
  import { ref } from 'vue';

  const session = refSession()
  // import activities array
  const activities = ref([] as Activity[])
  const activityDataResponse = await getActivities()
  const activityDataEnvelope = await activityDataResponse
  activities.value = activityDataEnvelope!.data as Activity[]

  console.log('activities in MyActivity: ' + JSON.stringify(activities.value));

  // filter them to be the currentUser's activities
  const filteredActivities = filterUserActivities(session.user!, activities.value)

  const todaysActivities = getTodaysActivities(filteredActivities)
  const thisWeeksActivities = getWeeksActivities(filteredActivities)
  console.log("This weeks activities: " + thisWeeksActivities)
</script>
<template>
<body>
  <div>
    <StatisticsBlock :text="'Today'" :activities="todaysActivities"/>
    <hr>
    <StatisticsBlock :text="'This Week'" :activities="thisWeeksActivities"/>
    <hr>
    <StatisticsBlock :text="'All Time'" :activities="filteredActivities"/>
  </div>
</body>
</template>../components/Activity-Components/ActivityPost.vue