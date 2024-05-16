<script setup lang="ts">


  
// prop functions
  function itemProjection() {

  }
  function selectItemEventHandler() {

  }
  function onInputEventHandler() {
    // on input we need to send a request to the server  to get the new filtered data

  }
  function onFocusEventHandler() {

  }
  function onBlurEventHandler() {
    
  }

</script>

<template>
  <section>
    <o-field grouped>
        <o-switch v-model="openOnFocus">Open dropdown on focus</o-switch>
        <o-switch v-model="keepFirst">Keep-first</o-switch>
    </o-field>

    <o-field label="Find a name">
        <o-autocomplete
            v-model="userName"
            placeholder="e.g. Anne"
            :keep-first="keepFirst"
            :open-on-focus="openOnFocus"
            :data="filteredDataObj"
            field="user.first_name"
            @select="(option) => (selected = option)">
            <template #empty> No results found </template>
        </o-autocomplete>
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
  </section>
</template>