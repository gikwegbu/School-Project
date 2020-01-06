<template>
    <div>
         <v-app-bar
      app
      color="teal"
      dark
    >
      <div class="d-flex align-center">
        <v-img alt="A.R.C.G Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40" /> 
      </div>
      

      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="">
          <v-btn text to="/signup">Sign Up  </v-btn> 
          <v-btn text to="/login">Login  </v-btn>
      </v-toolbar-items> -->

      <v-avatar color="orange" size="50" class="mr-2">
        <v-img alt="Vuetify Logo" class="shrink" contain src="../assets/img/avatar.png" width="40" />
      </v-avatar>
    </v-app-bar>


    <v-content>
      <slot />
    </v-content>

    <!-- This is for the speedDial -->
      <Dial /> 
    <!-- This is for the speedDial -->

      <v-bottom-navigation v-model="bottomNav" color="teal"  fixed shift >
        <v-btn to="/folder">
          <span>Folder</span>
          <v-icon>mdi-folder</v-icon>
        </v-btn>

        <v-btn to="/template">
          <span>Template</span>
          <v-icon>mdi-domain</v-icon>
        </v-btn>

        <v-btn to="/">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/new">
          <span>New</span>
          <v-icon>mdi-cellphone-wireless</v-icon>
        </v-btn>

        <v-btn to="/profile">
          <span>User</span>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-bottom-navigation>  
    </div>
  </template>

<style scoped> 
</style>

  <script>
import Dial from '../components/SpeedDial'
  export default {
    components:{ 
    Dial
    },
    data(){
      return{
        bottomNav: '', /* This returns the index 2 which is home, and makes it active at default */
        homeBtn: false,
      }
    }
  }
  </script>