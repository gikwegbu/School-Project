<template>
  <v-card max-width="100%" class="mx-auto" outlined>
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-icon color="white darken-2">mdi-vuetify</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Ikwegbu George</v-list-item-title>
        <v-list-item-subtitle>
            Lead AI Researcher
            <v-icon color="green darken-2">mdi-vuejs</v-icon>
            <v-icon color="black darken-2">mdi-plus</v-icon> 
            <v-icon color="blue darken-2">mdi-vuetify</v-icon>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img src="../assets/img/avatar.png" height="500" ></v-img>

    <v-card-text>
      <span>
          <v-icon>mdi-email</v-icon>
          g.ikwegbu@gmail.com
      </span> |
      <span>
         <v-icon>mdi-cellphone-basic</v-icon>
          g.ikwegbu@gmail.com
      </span> 

    </v-card-text>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4" >
        <v-badge
          color="teal"
          content='80'
        >
          Research
        </v-badge>
      </v-btn>
      <v-btn text color="deep-purple accent-4"  >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="red darken-1">mdi-heart</v-icon>
      </v-btn> 
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card{
    /* margin-top: 20%; */
}
</style>