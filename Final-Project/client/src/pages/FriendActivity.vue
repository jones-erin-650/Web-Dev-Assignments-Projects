<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { type User, getUsers, getUserActivities, getUserFromHandle } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import { getActivities, type Activity } from '@/model/Activity';
    
  // want to first import the current user using refSession
  const session = refSession()

  // import current user for the filter logic
  // i don't think we need to dereference the session like this as the logic is different from MyActivity, but might as well just keep it cause we know it works

  const userDataResponse = await getUserFromHandle(session.user!.handle)
  const userDataEnvelope = await userDataResponse
  const currentUser = userDataEnvelope!.data as User

  console.log('current user in MyActivity: ' + JSON.stringify(currentUser));

  


  // import activities array
  const activities = ref([] as Activity[])
  const activityDataResponse = await getActivities()
  const activityDataEnvelope = await activityDataResponse
  activities.value = activityDataEnvelope!.data as Activity[]

  console.log('activities in MyActivity: ' + JSON.stringify(activities.value));

  // should definitely be a function but unfortunately im lazy right now
  const filteredActivities = activities.value.filter( (item) =>  item.originalPoster != currentUser.handle)


  
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