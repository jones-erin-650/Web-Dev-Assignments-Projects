<template>
    <div>
        <h3>{{user.name}}</h3>
    </div>
</template>

<script>
    
    export default {
        name: 'User',
        // Takes in an individual user object
        props: {
            user: Object
        }
    }
</script>