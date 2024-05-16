<script setup lang="ts">

</script>

<template>
    <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Search User Activities"
        :items="['One','Two','Three']"
        :minInputLength="1"
        :itemProjection="itemProjectionFunction"
        @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler"
        @onFocus="onFocusEventHandler"
        @onBlur="onBlurEventHandler"
    >
    </vue3-simple-typeahead>
</template>