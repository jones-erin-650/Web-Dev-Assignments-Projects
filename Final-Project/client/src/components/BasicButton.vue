<script setup lang="ts">
  const props = defineProps({
    // user props
    text: String,
    color: String,
    shape: String,
    position: String
  })

</script>

<template>
    <button class="button" :class = "color">{{text}}</button>
</template>
