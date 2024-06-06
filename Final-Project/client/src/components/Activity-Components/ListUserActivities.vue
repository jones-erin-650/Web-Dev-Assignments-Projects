<script setup lang="ts">
  import {  onMounted, ref } from 'vue';
  import { filterUserActivities, getUserFromHandle, type User } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  
  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import { getActivities, type Activity } from '@/model/Activity';

  // want to first import the current user using refSession
  const session = refSession()

  

  console.log('activities in MyActivity: ' + JSON.stringify(props.activities.value));

  const filteredActivities = filterUserActivities(session.user!, activities.value)

  console.log('filtered activities in MyActivity: ' + JSON.stringify(filteredActivities));
  
  
  // pass that in as props for the activity post
  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }

  const props = defineProps({
    // passes in the activities from the server so that whenever that info is updated it updates a prop and reloads the component to match the new data
    activities: Object as PropType<Activity[]>,
  })

</script>

<template>

    <div>
      <BasicButton text="Add Activity" color="is-dark" @click="isActive = !isActive"/>
      <ActivityModal 
        :isActive="isActive" 
        :submitType="'Add Activity'" 
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