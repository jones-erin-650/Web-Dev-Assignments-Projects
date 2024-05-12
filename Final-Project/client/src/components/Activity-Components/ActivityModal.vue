<script setup lang="ts">
  import BasicButton from '../BasicButton.vue';
  import { addActivity, refNewActivity, setEmptyActivity, editActivity } from '@/model/Activity';
  import type { PropType } from 'vue'
  import type { Activity } from '@/model/Activity'
  import type { User } from '@/model/User'


  // clears out the newActivity object in new-Activity.ts to be filled with new values, then imports it by using refNewActivity
  setEmptyActivity()
  const newActivity = refNewActivity()

  // tells the parent component when the modal is toggled so it can activate and deactivate it
  defineEmits(['modalToggled'])


  const props = defineProps({
    isActive: Boolean,

    // this gets passed down to the submit button to determine whether you're adding a new Activity or editing a preexisting one
    // 'Edit Activity' makes it call editActivity, and 'Add Activity' makes it call addActivity
    submitType: String,
    user: Object as PropType<User>,
    originalActivity: Object as PropType<Activity>,
    originalActivityID: Number
  })

  // debugging

</script>

<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" ></div>
    <div class="modal-content has-background-white">
      
      <div class="field">
        <label class="label">Activity Type</label>
        <div class="select">
          <select>
            <option>Walking</option>
            <option>Running</option>
            <option>Biking</option>
            <option>Swimming</option>
          </select>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-one-fifth">
            <label class="label">Distance</label>
            <div class="control">
              <input class="input" placeholder="Miles" v-model="newActivity.distanceMiles" >
              <input class="input" placeholder="Feet" v-model="newActivity.distanceFeet" >
          </div>
            
          </div>
        </div>
      </div>
      
      <div class="columns">
        <div class="column is-one-fifth">
          <label class="label">Duration</label>
          <div class="control">
            <input class="input" placeholder="Hours" v-model="newActivity.durationHours">
            <input class="input" placeholder="Minutes" v-model="newActivity.durationMinutes">
        </div>
          
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Location</label>
            <div class="control">
              <input class="input" placeholder="Location" v-model="newActivity.location">
          </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Post Image</label>
            <div class="control">
              <input class="input" placeholder="Image URL" v-model="newActivity.picture">
          </div>
          </div>
        </div>
      </div>

      
      <div class="field">
        <label class="label">Post Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="newActivity.text"></textarea>
        </div>
      </div>
      
      <div class="field is-grouped">
        <!-- passes in the newActivity to be added or edited, text determines which action it does -->
        <div class="control">
          <BasicButton v-if="submitType === 'Add Activity'"
            :text="submitType" 
            :color="'is-link'" 
            @click="addActivity(newActivity), $emit('modalToggled')"/>
        </div>
        <div class="control">
          <BasicButton v-if="submitType === 'Edit Activity'"
            :text="submitType" 
            :color="'is-link'" 
            @click="editActivity(newActivity, originalActivityID!), $emit('modalToggled')"/>
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