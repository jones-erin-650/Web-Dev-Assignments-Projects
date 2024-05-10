<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { type User, getUsers, getUserActivities } from '@/model/User'
  import { refSession } from '@/viewModel/session'
  import ActivityPost from '@/components/Activity-Components/ActivityPost.vue';
  
  // used to make sure that the current user's activities aren't being shown with the friends' activities
  const session = refSession()
  //imports user array
  const users = ref([] as User[]);
  onMounted(async () => {
  try {
    const usersResponse = await getUsers();
    users.value = usersResponse!.data;
  } catch (error: any) {
    console.error('Error loading users:', error.message);
  }
})

  
</script>
<template>
  <div>

    <div v-for="user in users" :key="user.id" >
      <ActivityPost v-if="user!=session.user" v-for="activity in getUserActivities(user)" :key="activity.id"
        :user="user"
        :activity="activity"
      />
      <hr>
    </div>
  </div>
</template>