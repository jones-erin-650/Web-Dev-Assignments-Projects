<script setup lang="ts">
  import { getUsers, type User } from '@/model/User'
  import { ref } from 'vue';

  const users = ref([] as User[]) 
  users.value = getUsers()

  const props = defineProps({
    text: String,
  })

</script>

<template>
  <div class="dropdown is-active">
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
        <a href="#" class="dropdown-item" v-for="user in users" :key="user.id">
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