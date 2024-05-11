
<script setup lang="ts">
  import {  ref } from 'vue';
  import { filterUserActivities, getUserFromHandle, type User } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  
  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import { getActivities, type Activity } from '@/model/Activity';

  // want to first import the current user using refSession
  const session = refSession()
  
  // this is needed to prevent the bug where changing the current user changes what handle is displayed on the curent user's posts; it basically dereferences the ref variable
  // now when you change the currentuser variable it won't immediately switcht the handles on this page

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

  const filteredActivities = filterUserActivities(session.user!, activities.value)

  console.log('filtered activities in MyActivity: ' + JSON.stringify(filteredActivities));
  
  
  // pass that in as props for the activity post
  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }
</script>

<template>

    <div>
      <BasicButton text="Add Activity" color="is-dark" @click="isActive = !isActive"/>
      <ActivityModal 
        :isActive="isActive" 
        :submitType="'Create Activity'" 
        @modalToggled="toggleModal()"
        
        />
      <hr>
      <!-- this is needed when using promises -->
     
      <ActivityPost v-for="(activity) in filteredActivities" :key="activity.id"
        :activity="activity"
      />

      <hr>
    </div>

</template>