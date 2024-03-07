<template>
  <div>
    <!-- navbar will go here because it should show up on every page -->
    <NavBar />

    <div class="container">
      <RouterView />
    </div>
    
  </div>
</template>

<script>
  // import components here
  import NavBar from './components/NavBar.vue'

  export default {
    name: 'App',
    // register components here 
    components: {
      NavBar,
    },
    data() {
      return {
        // empty array of user objects
        users: []
      }
    },
    created() {
      this.users = {
        id: '1',
        name: 'Erin Jones',
        isAdmin: true,

      }
    }
  }
</script>

<!-- bulma will be our default styling -->
<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
