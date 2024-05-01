<script setup lang="ts">

  import { RouterView } from 'vue-router'
  import { refSession } from '@/viewModel/session'

  // components
  import NavBar from './components/NavBar.vue'
  import SignInForm from './components/User-Components/SignInForm.vue';
  import WelcomeMessage from './components/WelcomeMessage.vue';
  // want to first import the current user using refCurrentUser to check if it's undefined
  const session = refSession()
</script>

<template>
  <div>
    <!-- if there's no current user logged in then it should show a sign in field -->
    <div v-if="session.user === null">
      <WelcomeMessage />
      <br>
      <SignInForm />
    </div>
    
    <div v-else class="else-conditional">
      <NavBar />
      <!-- this column is just here to add some space between the navbar and page view, not a good solution but it is a solution -->
      <div class="column"></div>
      <div class="container.is-widescreen">
        <!-- these columns set the current page's router view in the middle of the page, this way we don't have to retype this in every page -->
        <div class="columns is-gapless">
          <div class="column"></div>
          <div class="column is-10 ">
            <RouterView />
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<style scoped>
  .column {
    max-width: 100%
  }
</style>