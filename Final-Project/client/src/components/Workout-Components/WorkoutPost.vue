<script setup lang="ts">
  import { ref } from 'vue';
  import { refCurrentUser } from '@/viewModel/currentuser';
  import type { Workout } from '@/model/Workout';
  import type { User } from '@/model/User';
  import {PropType} from '@vue/composition-api';
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
  })
</script>

<template>
    <article class="media">
        <figure class="media-left">
          <p class="image is-64x64 is-rounded">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{currentUser.firstName}} {{currentUser.lastName}}</strong> <small>{{currentUser.email}}</small> <small>31m</small>
              <br>
              {{workout.text}}
            </p>
            <!-- post image -->
            <p class="image is-128x128">
              <img :src="workout.picture" width="640" height="360">
            </p>
            <p>
              <span class="icon is-small"><i class="fas fa-location-dot"></i></span>
              <small>{{workout.location}}</small>
            </p>
            <p>
              {{ workout.duration }} {{ workout.durationUnit }} 
              <span></span>
              {{ workout.distance }} {{ workout.distanceUnit }}
            </p>

          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
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
                <a href="#" class="dropdown-item" @click="toggleModal">
                  Edit
                  <WorkoutModal :isActive="modalIsActive" :submitType="'Edit Workout'"/>
                </a>
                <a class="dropdown-item">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
</template>