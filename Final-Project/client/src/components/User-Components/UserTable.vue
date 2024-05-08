<script setup lang="ts">
  import { getUsers, type User } from '@/model/User'
  import { ref } from 'vue';
  import BasicButton from '../BasicButton.vue';
  import { deleteUser, addUser, editUser } from '@/model/User';
import UserModal from './UserModal.vue';

  const users = ref([] as User[]) 
  users.value = getUsers()

  // dropdown functionality
  let isActive = ref(false);
  let modalIsActive = ref(false)
  function toggleModal() {
    modalIsActive.value = !modalIsActive.value
  }



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
          <th></th>
          <th></th>
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
          <th class="dropdown-menu" id="dropdown-menu-post" role="menu"  :class="{ 'is-active': isActive }">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item" @click="toggleModal()">
                Edit
              </a>
              <!-- listens for the modalToggled event and calls the function when it hears it -->
              <UserModal
                :isActive="modalIsActive" 
                :originalUser="user"
                :originalUserId="user.id" 

                :submitType="'Edit User'"
                @modalToggled="toggleModal()"
                />
                
              <a class="dropdown-item" @click="deleteUser(user.id)">
                Delete
              </a>
            </div>
          </th>
          <th>
            <BasicButton text="Add Activity" color="is-dark" @click="isActive = !isActive"/>
            <UserModal 
              :isActive="isActive" 
              :submitType="'Create User'" 
              @modalToggled="toggleModal()"
        
            />
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

