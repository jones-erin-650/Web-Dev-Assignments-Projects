<script setup lang="ts">
  import { ref } from 'vue';  
  import UserTable from '@/components/User-Components/UserTable.vue'

</script>

<template>
  <div class="container">
    <h3>Users</h3>
    <div class="columns">
      <!-- spacing column -->
      <div class="column"></div>
      <!-- main part with the table -->
      <div class="column is-11">
        <UserTable />
      </div>
      <!-- spacing column -->
      <div class="column"></div>
    </div>
  </div>
</template>

