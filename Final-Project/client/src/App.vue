<template>
  <div class="container.is-fullhs">
    <!-- navbar will go here because it should show up on every page -->
    <NavBar />

    <RouterView />
    

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
  }
</script>

<!-- bulma will be our default styling -->
<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
