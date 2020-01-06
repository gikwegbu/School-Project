<template> 
    <div class="profile">
      <Profile/>
    </div> 
</template>

<script> 
import Profile from '../components/UserProfile'

export default {
  name: 'profile',

  components: { 
    Profile 
  },

  data: () => ({
    //
  }),
};
</script>
