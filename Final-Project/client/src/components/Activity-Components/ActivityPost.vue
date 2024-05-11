<script setup lang="ts">
  import { ref } from 'vue';
  import { refSession } from '@/viewModel/session'
  import type { Activity } from '@/model/Activity';
  import { deleteActivity } from '@/model/Activity';
  import {getUserFromHandle, type User } from '@/model/User';
  import type { PropType } from 'vue'
  import ActivityModal from './ActivityModal.vue';

  // this is needed for the check to see if the edit and delete button should show up
  const session = refSession()

  


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
    // pass in the current Activity in the for loop
    activity: Object as PropType<Activity>,
  })
  // need to get the user information from the handle of the original poster that way we dont need a prop passing in the User
  const userDataResponse = await getUserFromHandle(props.activity!.originalPoster)
  const userDataEnvelope = await userDataResponse
  const activityPoster = userDataEnvelope!.data as User
</script>

<template>
    <article class="media" v-if="activityPoster != undefined && activity != undefined">
        <figure class="media-left">
          <p class="image is-64x64 is-rounded">
            <img :src="activityPoster.profilePicture">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{activityPoster.firstName}} {{activityPoster.lastName}}</strong> 
              <span>&nbsp;</span>
              <small>{{activityPoster.handle}}</small>
              <span>&nbsp;</span>
              <span>&#183;</span> 
              <span>&nbsp;</span>
              <small>{{activity.date.slice(0, 10)}}</small>
            </p>
            <p>{{activity.text}}</p>
            <div class="columns">
              
              <div class="column is-1">
                <h3>{{ activity.durationHours }}:{{ activity.durationMinutes }}</h3>
                <small>Time</small>
              </div>
              <div class="column">
                <h3>&#183;
                  {{ activity.distanceMiles }}:{{ activity.distanceFeet }} Mi</h3>
                <small>&#183; Distance</small>
              </div>
              <div class="column is-auto"></div>
              
            </div>
            
            <!-- post image -->
            <p class="image" width="200" height="200">
              <img :src="activity.picture">
            </p>
            <p>
              <span class="icon is-small"><i class="fas fa-location-dot"></i></span>
              <small>{{activity.location}}</small>
            </p>
            

          </div>
          
        </div>
        <div class="media-right">
          <!-- only appears if the current user posted the Activity -->
          <div class="dropdown post-options" :class="{ 'is-active': isActive }" v-if="session.user!.handle === activityPoster.handle">
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
                <ActivityModal 
                  :isActive="modalIsActive" 
                  :originalActivity="activity"
                  :originalActivityID="activity.id" 
                  :user="activityPoster"
                  :submitType="'Edit Activity'"
                  @modalToggled="toggleModal()"
                  />
                  
                <a class="dropdown-item" @click="deleteActivity(activity!)">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
</template>