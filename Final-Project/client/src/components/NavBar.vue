<script setup lang="ts">
  import { ref } from 'vue';
  import LoginDropdown from './User-Components/LoginDropdown.vue';

  let isActive = ref(false);

  // navbar burger functionality
  function toggleMenu() {
    isActive.value = !isActive.value;
  }


    
</script>

<style scoped>
  .router-link-active {
    border-bottom: 2px solid white;
  }
</style>

<template>
    <div >
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <!-- <a class="navbar-item" href="https://bulma.io">
                <img src="src/assets/png-transparent-vue-js-hd-logo" width="112" height="28">
              </a> -->
          
              <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive } " class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div :class="{ 'is-active': isActive }" id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <RouterLink to="/" class="navbar-item">
                  Home
                </RouterLink>
          
                <RouterLink to="/MyActivity" class="navbar-item">
                  My Activity
                </RouterLink>
          
                <RouterLink to="/FriendActivity" class="navbar-item">
                  Friend Activity
                </RouterLink>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Admin
                  </a>
          
                  <div class="navbar-dropdown">
                    <RouterLink to="/Users" class="navbar-item">
                      Users
                    </RouterLink>
                  </div>
              </div>
          </div>
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <!-- check if there's a signed in user, if so then have it say switch user -->
                    <LoginDropdown text="Log In"/>
                    <a class="button is-info">
                      <strong>Sign up</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </nav>
    </div>
</template>
