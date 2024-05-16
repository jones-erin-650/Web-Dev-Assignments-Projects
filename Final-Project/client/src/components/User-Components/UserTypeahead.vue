<script setup lang="ts">
  
// prop functions
  function itemProjection() {

  }
  function selectItemEventHandler() {

  }
  function onInputEventHandler() {

  }
  function onFocusEventHandler() {

  }
  function onBlurEventHandler() {
    
  }

</script>

<template>
    <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Search User Activities"
        :items="['One','Two','Three']"
        :minInputLength="1"
        :itemProjection="itemProjection()"
        @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler"
        @onFocus="onFocusEventHandler"
        @onBlur="onBlurEventHandler"
    >
    </vue3-simple-typeahead>
</template>