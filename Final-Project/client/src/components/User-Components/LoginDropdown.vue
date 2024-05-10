<script setup lang="ts">
  import { getUsers, type User } from '@/model/User'
  import { onMounted, ref } from 'vue';
  import { refCurrentUser, setRefCurrentUser, logOut } from '@/viewModel/session'

  // this needs to be imported in order to refresh the page when there's a new login
  import { useRouter } from 'vue-router';

  const router = useRouter();


  // bringing in the user array
  const users = ref([] as User[]);
  onMounted(async () => {
  try {
    const usersResponse = await getUsers();
    users.value = usersResponse.data;
  } catch (error: any) {
    console.error('Error loading users:', error.message);
  }
});

  // bringing in the current user variable
  const currentUser = ref()
  currentUser.value = refCurrentUser()

  const props = defineProps({
    text: String,
  })

  // dropdown functionality
  let isActive = ref(false);
  function toggleMenu() {
    isActive.value = !isActive.value;
  }

</script>

<template>
  <!-- on click it adds the is-active class, presence of the active class will be determined by thetruthiness of the variable is active -->
  <div class="dropdown" @click="toggleMenu" :class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{text}}</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item" v-for="user in users" :key="user.id" @click="setRefCurrentUser( user )">
          {{user.firstName}} {{ user.lastName }}
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item" @click="logOut()">
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>