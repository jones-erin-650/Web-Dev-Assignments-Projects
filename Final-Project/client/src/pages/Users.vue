<script>
  import { ref } from 'vue';  
  import UserTable from '../components/User-Components/UserTable.vue'

</script>

<template>
  <div class="container">
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

