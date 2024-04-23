<script setup lang="ts">
  import { ref } from 'vue';
  import { type User, getUsers } from '@/model/User'
  import { refCurrentUser } from '@/viewModel/session'
  
  // used to make sure that the current user's activities aren't being shown with the friends' activities
  const currentUser = refCurrentUser()

  //imports user array
  const users = ref([] as User[]) 
  users.value = getUsers()

  // components
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
</script>

<template>

  <div>
    
    <div v-for="user in users" :key="user.id">
      <ActivityPost v-if="user!=currentUser" v-for="activity in user.userActivities" :key="activity.id"
        :user="user"
        :activity="activity"
      />
      <hr>
    </div>
  </div>

</template>


