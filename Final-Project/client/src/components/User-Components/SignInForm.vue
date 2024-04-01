<script setup lang="ts">
  import LoginDropdown from './LoginDropdown.vue';
</script>
<!-- this is just for when the user first enters the site. since there's no currentUser value a lot of stuff breaks if we don't have them log in first -->

<template>
    <div class="container">

        <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
        
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Text input" value="">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
        
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email input" value="">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            
          </div>
        
          <div class="field">
            <label class="label">Signed In Users</label>
            <div class="control">
              <LoginDropdown text="Log in"/>
            </div>
          </div>
        
        <br>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Sign In</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
    </div>
</template>