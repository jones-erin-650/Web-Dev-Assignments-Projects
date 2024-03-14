<script setup lang="ts">
  import type { Workout } from '@/model/Workout';
  import SubmitButton from './SubmitButton.vue';
  import { addWorkout } from '@/viewModel/currentuser';

  const newWorkout: Workout = {
    date: {
        year: 0,
        month: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    distance: 0,
    distanceUnit: '',
    duration: 0,
    durationUnit: '',
    location: '',
    postId: 0,
    picture: '',
    text: '',
  }

  const props = defineProps({
    isActive: Boolean,

    // this gets passed down to the submit button to determine whether you're adding a new workout or editing a preexisting one
    submitButtonText: String
  })

  // debugging

</script>

<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="isActive = !isActive" ></div>
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
          <SubmitButton :text="submitButtonText" :newWorkout="newWorkout" @click="addWorkout(newWorkout)"/>
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