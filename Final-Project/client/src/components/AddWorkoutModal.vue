<script setup lang="ts">
  const props = defineProps({
    isActive: Boolean
  })

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
              <input class="input" placeholder="Distance" >
          </div>
            <div class="select">
              <select>
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
            <input class="input" placeholder="Duration" >
        </div>
          <div class="select">
            <select>
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
              <input class="input" placeholder="Location" >
          </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="columns">
          <div class="column is-half">
            <label class="label">Post Image</label>
            <div class="control">
              <input class="input" placeholder="Image URL" >
          </div>
          </div>
        </div>
      </div>

      
      <div class="field">
        <label class="label">Post Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
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