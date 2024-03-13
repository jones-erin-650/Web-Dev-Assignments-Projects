<script setup lang="ts">
  import { getUsers, type User } from '@/model/User'
  import { ref } from 'vue';
  import { refCurrentUser } from '@/viewModel/currentuser';

  // bringing in the user array
  const users = ref([] as User[]) 
  users.value = getUsers()

  // bringing in the current user variable
  const currentUser = ref()
  currentUser.value = refCurrentUser

  const props = defineProps({
    text: String,
  })

  // dropdown functionality
  let isActive = ref(false);

  // navbar burger functionality
  function toggleMenu() {
    isActive.value = !isActive.value;
  }

  // sets the current user when you click their name
  // takes in a user as a parameter, the current user in the v-loop is passed
  function setCurrentUser(user: User ) {
    currentUser.value = user
    console.log(currentUser.value)
    console.log(currentUser.value.firstName)
  }



</script>

<template>
  <!-- on click it adds the is-active class, presence of the active class will be determined by thetruthiness of the variable is active -->
  <div class="dropdown" @click="toggleMenu" :class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Log In</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item" v-for="user in users" :key="user.id" @click="setCurrentUser( user )">
          {{user.firstName}} {{ user.lastName }}
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item">
          {{ text }}
        </a>
      </div>
    </div>
  </div>
</template>