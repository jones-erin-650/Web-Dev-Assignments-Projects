<script setup lang="ts">
import { ref } from 'vue';
import currentUser from '@/App.vue'

</script>

<template>
    <section class="hero is-info">
        <div class="hero-body">
          <p class="title">
            Welcome Back {{ currentUser.value.firstName}}!
          </p>
          <p class="subtitle">
            Do any workouts today?
          </p>
        </div>
      </section>
</template>