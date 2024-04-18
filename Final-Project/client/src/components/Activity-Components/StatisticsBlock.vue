<script setup lang="ts">
import type { Activity } from '@/model/Activity'
import type { PropType } from 'vue'
import { getTotalDistance, getAveragePace, getTotalDuration, getTotalCalories,  } from '@/model/statistics';

// just gets passed in a Activity Object to run calcs on
const props = defineProps({
  activities: Object as PropType<Activity[]>,
  text: String
})


// the ! tells typescript that even if it looks like it could be null or undefined it isn't
// the + just makes sure that toFixed returns a number and not a string
const totalDistance = +getTotalDistance(props.activities!).toFixed(2)
const totalDuration = +getTotalDuration(props.activities!).toFixed(2)
const averagePace = +getAveragePace(totalDistance, totalDuration).toFixed(2)
const totalCalories = getTotalCalories(props.activities!)


</script>

<template>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{text}}
    </p>
    
  </header>
  <div class="card-content">
    <div class="content">
      <div class="columns">
        <div class="column is-half">
          <h3> {{ totalDistance }} Mi</h3>
          <small>Distance</small>
        </div>
        <div class="column">
          <h3 v-if="activities != undefined"> {{ totalDuration }} Hours</h3>
          <small>Duration</small>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <h3 v-if="activities != undefined"> {{ averagePace }} MPH</h3>
          <small>Avg Pace</small>
        </div>
        <div class="column">
            <h3 v-if="activities != undefined"> {{ totalCalories }} kcals</h3>
            <small>Calories</small>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</template>