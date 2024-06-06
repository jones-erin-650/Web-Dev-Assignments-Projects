<!-- imports the user data from the server and passes it in as a prop to the UserTable component, making it a prop allows Vue to update the component whenever its prop is changed, which updates the page when the user data in the server is changed without having to reload the page -->

<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import { getUsers, type User } from '@/model/User'
  import UserTable from './UserTable.vue'

  // importing the users
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
  <UserTable :users />
</template>