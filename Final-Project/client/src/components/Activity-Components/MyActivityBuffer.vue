<!-- simply calls the list user activity component with the list of users as a component so it will actually be reactive -->
<script setup lang="ts">
  import {ref} from 'vue'
  import  ListUserActivities  from "./ListUserActivities.vue";
  import { getActivities, type Activity } from '@/model/Activity';
// import activities array
  const activities = ref([] as Activity[])
  const activityDataResponse = await getActivities()
  const activityDataEnvelope = await activityDataResponse
  activities.value = activityDataEnvelope!.data as Activity[]

  
</script>

<template>
    <ListUserActivities :activities />
</template>