<script setup lang="ts">
 
  import type { PropType } from 'vue'
  import { refNewUser, setEmptyUser, type User, addUser, editUser } from '@/model/User'
  import BasicButton from '../BasicButton.vue';


  // clears out the newActivity object in new-Activity.ts to be filled with new values, then imports it by using refNewActivity
  setEmptyUser()
  const newUser = refNewUser()

  // tells the parent component when the modal is toggled so it can activate and deactivate it
  defineEmits(['modalToggled'])


  const props = defineProps({
    isActive: Boolean,

    // this gets passed down to the submit button to determine whether you're adding a new User or editing a preexisting one
    // 'Edit User' makes it call editUser, and 'Add Activity' makes it call addUser
    submitType: String,
    originalUser: Object as PropType<User>,
    originalUserId: Number
  })

  // debugging

</script>

<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" ></div>
    <div class="modal-content has-background-white">
      

      <div class="field">
        <div class="columns">
          <div class="column is-one-fifth">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" placeholder="First Name" v-model="newUser.firstName" >
              <input class="input" placeholder="Last Name" v-model="newUser.lastName" >
          </div>
            
          </div>
        </div>
      </div>
      
      <div class="columns">
        <div class="column is-one-fifth">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" placeholder="@example" v-model="newUser.handle">
        </div>
          
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" placeholder="example@example.com" v-model="newUser.email">
          </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Profile Picture</label>
            <div class="control">
              <input class="input" placeholder="Image URL" v-model="newUser.profilePicture">
          </div>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <!-- passes in the newActivity to be added or edited, text determines which action it does -->
        <div class="control">
          <BasicButton 
            v-if="submitType === 'Create User'"   :text="submitType" 
            :color="'is-link'" 
            @click="addUser(newUser), $emit('modalToggled')"/>
          <BasicButton 
            v-else-if="submitType === 'Edit User' && originalUser!=undefined" 
            :text="submitType" 
            :color="'is-link'" 
            @click="editUser(originalUser!, newUser), $emit('modalToggled')"/>
        </div>
        <div class="control">
          <button 
            class="button is-link is-light" 
            @click=" $emit('modalToggled')">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .modal-content {
    padding: 10px;
  }

</style>