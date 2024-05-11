
<script setup lang="ts">
  import {  ref } from 'vue';
  import { getUserActivities, getUserFromHandle, type User } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  
  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import { getActivities, type Activity } from '@/model/Activity';

  // want to first import the current user using refSession
  const session = refSession()

  console.log("current user activities: " + getUserActivities(session.user!))
  console.log("current user name: " + session.user!.firstName)

  
  // this is needed to prevent the bug where changing the current user changes what handle is displayed on the curent user's posts; it basically dereferences the ref variable
  // now when you change the currentuser variable it won't immediately switcht the handles on this page

  const userDataResponse = await getUserFromHandle(session.user!.handle)
  const userDataEnvelope = await userDataResponse
  const currentUser = userDataEnvelope!.data as User


  // get the current user's activity array using getUserActivities; the reason it's done like this is for the same reason as the user, 

  // import activities array
  const activities = ref([] as Activity[])
    getActivities()
    .then((data) => {
        if(data){
            activities.value = data.data
        }
    })

  const filteredActivities = activities.value.filter( (item) =>  item.originalPoster === currentUser.handle)
  
  
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
     
      <ActivityPost v-for="(activity, index) in filteredActivities" :key="activity.id"
        :user="currentUser"
        :activity="activity"
        :userActivities="filteredActivities"
      />

      <hr>
    </div>

</template>