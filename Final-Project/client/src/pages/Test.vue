<template>
    <div>
       <h3>TEST</h3> 

       <RenderUserData :user="user"/>

    </div>
</template>

<script>
    import RenderUserData from '../components/User-Components/RenderUserData'

    export default {
        name: 'Test',
        components: {
            RenderUserData,
        }
    }
</script>