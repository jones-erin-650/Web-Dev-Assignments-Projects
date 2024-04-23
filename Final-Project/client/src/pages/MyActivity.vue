<script setup lang="ts">
  import { ref } from 'vue';
  import { getUserActivities, type User } from '@/model/User'
  import { refCurrentUser } from '@/viewModel/session'
  

  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';

  // want to first import the current user using refCurrentUser
  const currentUser = refCurrentUser()

  console.log("current user activities: " + currentUser.value.userActivities.value)
  console.log("current user name: " + currentUser.value.firstName)

  // get the current user's activity array using getUserActivities
  const userActivities = getUserActivities(currentUser.value)
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
        :user="currentUser"
        :activity="activity"
        :userActivities="userActivities"
      />
      <hr>
    </div>

</template>

