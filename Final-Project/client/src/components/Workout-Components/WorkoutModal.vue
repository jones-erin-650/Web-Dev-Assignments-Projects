<script setup lang="ts">
  import type { Workout } from '@/model/Workout';
  import BasicButton from '../BasicButton.vue';
  import { addWorkout, editWorkout, refNewWorkout, setEmptyWorkout } from '@/viewModel/new-workout';

  // clears out the newWorkout object in new-workout.ts to be filled with new values, then imports it by using refNewWorkout
  setEmptyWorkout()
  const newWorkout = refNewWorkout()

  const props = defineProps({
    isActive: Boolean,

    // this gets passed down to the submit button to determine whether you're adding a new workout or editing a preexisting one
    // 'Edit Workout' makes it call editWorkout, and 'Add Workout' makes it call addWorkout
    submitType: String
  })

  // debugging

</script>

<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" ></div>
    <div class="modal-content has-background-white">
      
      <div class="field">
        <label class="label">Workout Type</label>
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
              <input class="input" placeholder="Distance" v-model="newWorkout.distance" >
          </div>
            <div class="select">
              <select v-model="newWorkout.distanceUnit">
                <option>MI</option>
                <option>FT</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      
      <div class="columns">
        <div class="column is-one-fifth">
          <label class="label">Duration</label>
          <div class="control">
            <input class="input" placeholder="Duration" v-model="newWorkout.duration">
        </div>
          <div class="select">
            <select v-model="newWorkout.distanceUnit">
              <option>Min(s)</option>
              <option>Hour(s)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Location</label>
            <div class="control">
              <input class="input" placeholder="Location" v-model="newWorkout.location">
          </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Post Image</label>
            <div class="control">
              <input class="input" placeholder="Image URL" v-model="newWorkout.picture">
          </div>
          </div>
        </div>
      </div>

      
      <div class="field">
        <label class="label">Post Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="newWorkout.text"></textarea>
        </div>
      </div>
      
      <div class="field is-grouped">
        <!-- passes in the newWorkout to be added or edited, text determines which action it does -->
        <div class="control">
          <BasicButton v-if="submitType === 'Create Workout'" :text="submitType" :newWorkout="newWorkout" :color="'is-link'" @click="addWorkout(newWorkout), isActive=!isActive"/>
          <BasicButton v-else-if="submitType === 'Edit Workout'" :text="submitType" :newWorkout="newWorkout" :color="'is-link'" @on-click="editWorkout(newWorkout), isActive=!isActive"/>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="isActive = !isActive">Cancel</button>
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