<script setup lang="ts">
import { ref } from 'vue';
import { refCurrentUser } from '@/viewModel/currentuser';

// imports the current user
  const currentUser = ref()
  currentUser.value = refCurrentUser()

</script>

<template>
    <section class="hero is-info">
        <div class="hero-body">
          <p class="title">
            Welcome Back {{ currentUser.value.firstName }}!
          </p>
          <p class="subtitle">
            Do any workouts today?
          </p>
        </div>
      </section>
</template>