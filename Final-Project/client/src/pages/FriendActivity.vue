<script setup lang="ts">
  import { ref } from 'vue';
  import { type User, getUsers, getUserActivities } from '@/model/User'
  import { refCurrentUser } from '@/viewModel/session'
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  
  // used to make sure that the current user's activities aren't being shown with the friends' activities
  const currentUser = refCurrentUser()
  //imports user array
  const users = ref([] as User[]) 
  users.value = getUsers()
  // components
  
</script>
<template>
  <div>

    <div v-for="user in users" :key="user.id" >
      <ActivityPost v-if="user!=currentUser" v-for="activity in getUserActivities(user)" :key="activity.id"
        :user="user"
        :activity="activity"
      />
      <hr>
    </div>
  </div>
</template>