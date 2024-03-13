<script setup lang="ts">
  const props = defineProps({
    // user props
    firstName: String,
    lastName: String,
    email: String,
    profilePicture: String,
    // workout props
    location: String,
    year: Number,
    month: Number,
    day: Number,
    hours: Number,
    minutes: Number,
    seconds: Number,
    distance: Number,
    distanceUnit: String,
    duration: Number,
    durationUnit: String,
    postId: Number,
    picture: String,
    text: String,
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
              <strong>{{firstName}} {{lastName}}</strong> <small>{{email}}</small> <small>31m</small>
              <br>
              {{text}}
            </p>
            <!-- post image -->
            <p class="image is-128x128">
              <img src="@/assets/images/newpaltz_03.jpg" width="640" height="360">
            </p>
            <p>
              <span class="icon is-small"><i class="fas fa-location-dot"></i></span>
              <small>{{location}}</small>
            </p>
            <p>
              {{ duration }} {{ durationUnit }} 
              <span></span>
              {{ distance }} {{ distanceUnit }}
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
          <button class="delete"></button>
        </div>
      </article>
</template>