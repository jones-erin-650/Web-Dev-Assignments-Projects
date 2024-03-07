<template>
    <div >
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <!-- <a class="navbar-item" href="https://bulma.io">
                <img src="src/assets/png-transparent-vue-js-hd-logo" width="112" height="28">
              </a> -->
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <router-link :to="{name: 'Home'}" class="navbar-item">
                  Home
                </router-link>
          
                <router-link :to="{name: 'MyActivity'}" class="navbar-item">
                  My Activity
                </router-link>
          
                <router-link :to="{name: 'FriendActivity'}" class="navbar-item">
                  Friend Activity
                </router-link>

                <router-link :to="{name: 'AdminPage'}" class="navbar-item">
                  Admin
                </router-link>

              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-info">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }

    // navbar burger functionality
    
</script>

<style scoped>
  #nav a.router-link-exact-active {
    
    background: black;
  }
</style>