<script setup lang="ts">
  import { getUsers, type User } from '@/model/User'
  import { onMounted, ref } from 'vue';
  import BasicButton from '../BasicButton.vue';
  import { deleteUser } from '@/model/User';
  import UserModal from './UserModal.vue';

   // pass that in as props for the activity post
  //modal functionality
  let isActive = ref(false);
  function toggleModal() {
    isActive.value = !isActive.value
  }

  const props = defineProps({
    users: Object as PropType<User[]>,
  })



</script>

<!-- should be a table of all the registered users with the variable at the top then each row being the user's variable -->
<template>
  <div class="table-container">
    <table class="table is-hoverable">
    <!-- top row with the names of the columns -->
      <thead>
        <tr>
          <th>PFP</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>User Name</th>
          <th>ID</th>
          <th>isAdmin</th>
          <th>
            <div>
              <BasicButton text="Add User" color="is-dark" @click="toggleModal"/>
              <UserModal 
                :isActive="isActive" 
                :submitType="'Add User'" 
                @modalToggled="toggleModal()"
          
              />
            </div>
          </th>
          <th>

          </th>
        </tr>
        <!-- each user in the array should make a new table row  -->
        <tr v-for="(user, index) in users" :key="user.id">
          <!-- pfp testing -->
          <th
            class="image" width="100" height="100">
              <img :src="user.profilePicture">
          </th>
          <th>{{user.firstName}}</th>
          <th>{{user.lastName}}</th>
          <th>{{user.email}}</th>
          <th>{{user.handle}}</th>
          <th>{{user.id}}</th>
          <th>{{user.isAdmin}}</th>
          <th>
            <BasicButton text="Delete User" color="is-dark" @click="deleteUser(user.id)"/>
          </th>
          <th>
            <div>
              <BasicButton text="Edit User" color="is-dark" @click="toggleModal"/>
              <UserModal 
                :isActive="isActive" 
                :submitType="'Edit User'" 
                :originalUserId="user.id"
                @modalToggled="toggleModal()"
          
              />
            </div>
          </th>
          
        </tr>
      </thead>
    </table>
  </div>
</template>

