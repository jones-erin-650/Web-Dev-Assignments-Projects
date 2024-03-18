<script setup lang="ts">
  import { ref } from 'vue';
  import { refCurrentUser } from '@/viewModel/currentuser';
  import type { Workout } from '@/model/Workout';
  import {type User, deleteWorkout } from '@/model/User';
  import type { PropType } from 'vue'
  import WorkoutModal from './WorkoutModal.vue';

  // this is needed for the check to see if the edit and delete button should show up
  const currentUser = refCurrentUser()

  // dropdown functionality
  let isActive = ref(false);
  let modalIsActive = ref(false)
  function toggleMenu() {
    isActive.value = !isActive.value;
  }
  function toggleModal() {
    modalIsActive.value = !modalIsActive.value
  }


  const props = defineProps({
    user: Object as PropType<User>,
    // pass in the current workout in the for loop
    workout: Object as PropType<Workout>,
    userWorkouts: Object as PropType<Workout[]>
  })
</script>

<template>
    <article class="media" v-if="user != undefined && workout != undefined">
        <figure class="media-left">
          <p class="image is-64x64 is-rounded">
            <img :src="user.profilePicture">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{user.firstName}} {{user.lastName}}</strong> 
              <span>&nbsp;</span>
              <small>{{user.userName}}</small>
              <span>&nbsp;</span>
              <span>&#183;</span> 
              <span>&nbsp;</span>
              <small>{{workout.date.slice(0, 10)}}</small>
            </p>
            <p>{{workout.text}}</p>
            <div class="columns">
              
              <div class="column is-1">
                <h3>{{ workout.durationHours }}:{{ workout.durationMinutes }}</h3>
                <small>Time</small>
              </div>
              <div class="column">
                <h3>&#183;
                  {{ workout.distanceMiles }}:{{ workout.distanceFeet }} Mi</h3>
                <small>&#183; Distance</small>
              </div>
              <div class="column is-auto"></div>
              
            </div>
            
            <!-- post image -->
            <p class="image" width="200" height="200">
              <img :src="workout.picture">
            </p>
            <p>
              <span class="icon is-small"><i class="fas fa-location-dot"></i></span>
              <small>{{workout.location}}</small>
            </p>
            

          </div>
          
        </div>
        <div class="media-right">
          <!-- only appears if the current user posted the workout -->
          <div class="dropdown post-options" :class="{ 'is-active': isActive }" v-if="currentUser.userName === user.userName">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu-post" @click="toggleMenu">
                <span class="icon is-small">
                  <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu-post" role="menu"  :class="{ 'is-active': isActive }">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item" @click="toggleModal()">
                  Edit
                </a>
                <!-- listens for the modalToggled event and calls the function when it hears it -->
                <WorkoutModal 
                  :isActive="modalIsActive" :originalWorkout="workout"
                  :originalWorkoutID="workout.workoutID" 
                  :user="user"
                  :submitType="'Edit Workout'"
                  @modalToggled="toggleModal()"
                  />
                  
                <a class="dropdown-item" @click="deleteWorkout(user, workout)">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
</template>