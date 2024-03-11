<!-- should be a table with the variable at the top then each row being the user's variable -->
<template>
    <div class="container">
        <div :key="user.id" v-for="user in users">
            <h3>User Name: {{user.name}}</h3>
            <h3>ID: {{user.id}}</h3>
            <h3>Admin Status: {{user.isAdmin}}</h3>
        </div>
    </div>
</template>

<script>
    import User from './User'

    export default {
        name: 'RenderUserData',
        props: {
            user: Array
        },
        components: {
            User
        }
    }
</script>