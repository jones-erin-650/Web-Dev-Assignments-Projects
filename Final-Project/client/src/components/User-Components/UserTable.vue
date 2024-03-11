<script>
  // import User from './User'

  export default {
      name: 'UserTable',
      // props: {
      //     user: Array
      // }
  }
</script>

<!-- should be a table of all the registered users with the variable at the top then each row being the user's variable -->
<template>
  <table class="table">
  <!-- top row with the names of the columns -->
    <thead>
      <tr>
        <th>PFP</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>User Name</th>
        <th>ID</th>
        <th>isAdmin</th>
      </tr>
    </thead>
  </table>
</template>

