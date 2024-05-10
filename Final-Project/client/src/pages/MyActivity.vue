<script setup lang="ts">
  import { ref } from 'vue';
  import { getUserActivities, getUserFromHandle, type User } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  
  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';

  // want to first import the current user using refSession
  const session = refSession()

  console.log("current user activities: " + getUserActivities(session.user!))
  console.log("current user name: " + session.user!.firstName)

  
  // this is needed to prevent the bug where changing the current user changes what handle is displayed on the curent user's posts; it basically dereferences the ref variable
  // now when you change the currentuser variable it won't immediately switcht the handles on this page

  const user = getUserFromHandle(session.user!.handle)

  // get the current user's activity array using getUserActivities; the reason it's done like this is for the same reason as the user, 
  const userActivities = getUserActivities(user!)
  console.log(userActivities)
  
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
      <ActivityPost v-for="(activity, index) in userActivities" :key="activity.id"
        :user="user"
        :activity="activity"
        :userActivities="userActivities"
      />
      <hr>
    </div>
</template>