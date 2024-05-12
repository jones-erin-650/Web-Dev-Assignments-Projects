
<script setup lang="ts">
  import {  onMounted, ref } from 'vue';
  import { filterUserActivities, getUserFromHandle, type User } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  
  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  import ActivityModal from '@/components/Activity-Components/ActivityModal.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import { getActivities, type Activity } from '@/model/Activity';
  import ListUserActivities from '@/components/Activity-Components/ListUserActivities.vue';

  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }
</script>

<template>
  <div>
    <ListUserActivities />  
  </div>
</template>