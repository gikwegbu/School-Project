<template>
  <v-card id="create"> 
    <v-speed-dial v-model="fab" fixed  bottom  right   direction="left"  transition="slide-x-reverse-transition" >
      <template v-slot:activator>
        <v-btn v-model="fab" color="orange darken-2" dark fab >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-clock-alert</v-icon>
        </v-btn>
      </template>
      <v-btn fab  dark small color="black" >
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn fab  dark  small color="blue" >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn fab dark small color="green" >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<style>
#create .v-speed-dial{
    bottom: 100px;
}
</style>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false, 
      tabs: null,  
    }),
    
  }
</script>