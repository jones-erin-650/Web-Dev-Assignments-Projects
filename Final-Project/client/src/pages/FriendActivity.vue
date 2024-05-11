<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { type User, getUsers, getUserFromHandle, filterFriendActivities } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import { getActivities, type Activity } from '@/model/Activity';
    
  // want to first import the current user using refSession
  const session = refSession()

  // import current user for the filter logic


  // import activities array
  const activities = ref([] as Activity[])
  const activityDataResponse = await getActivities()
  const activityDataEnvelope = await activityDataResponse
  activities.value = activityDataEnvelope!.data as Activity[]

  console.log('activities in MyActivity: ' + JSON.stringify(activities.value));

  // should definitely be a function but unfortunately im lazy right now
  const filteredActivities = filterFriendActivities(session.user!, activities.value)


  
</script>
<template>
  <Suspense>
    <div>

      <ActivityPost v-for="activity in filteredActivities" :key="activity.id"
        :activity="activity"
      />
      <hr>
    </div>
  </Suspense>
</template>