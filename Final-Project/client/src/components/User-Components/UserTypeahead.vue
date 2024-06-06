<!-- <script setup lang="ts">
  import { refNewUser, typeaheadSearch, type User } from '@/model/User';
  import { ref } from 'vue';

  const selected = ref()
  const keepFirst = ref(false);
  const openOnFocus = ref(false);
  const isFetching = ref(false)

  // used for v-model stuff
  const dummyUser = ref()
  
  // getting the filtered users
  const filteredData = ref()

  async function getAsyncData(currentInput: String) {
    // on input we need to send a request to the server  to get the new filtered data
    isFetching.value = true
    
    const response = await typeaheadSearch(currentInput)
    if(response!) {
      filteredData.value = response.data
    }
    isFetching.value = false
  }


</script>

<template>
  <section>
    <o-field grouped>
        <o-switch v-model="openOnFocus">Open dropdown on focus</o-switch>
        <o-switch> </o-switch>
    </o-field>

    <o-field label="Find a name">
        <o-autocomplete
            v-model="dummyUser.value"
            placeholder="Type in a user's name"
            :type="String"
            :keep-first="keepFirst"
            :open-on-focus="openOnFocus"
            :data="filteredData.value"
            :is-fetching="isFetching"
            field="user.firstName"
            @input="getAsyncData(dummyUser.value.firstName)"
            @select="(option) => (selected!.value = option)

            ">
            
            <template #empty> No results found </template>
        </o-autocomplete>
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
  </section>
</template> -->