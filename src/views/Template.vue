<template> 
    <div class="template">
      <v-list-item>
          <v-list-item-avatar>
              <v-icon class="grey darken-1 white--text">mdi-pen</v-icon>
          </v-list-item-avatar>
          <v-list-item-content> 
              <v-col cols="12" sm="6" md="4">
                <v-text-field @keypress.prevent="search()" v-model="searchWord"  label="Template" ></v-text-field>
              </v-col>
          </v-list-item-content>
      </v-list-item>
      <div class="list">
        <v-expansion-panels focusable inset>
          <v-expansion-panel  v-for="(item,i) in 10"  :key="i" >
            <v-expansion-panel-header>
              <v-list-item>
                <v-list-item-avatar>
                    <v-icon class="grey lighten-1 white--text">
                  mdi-pencil-plus
                    </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    Template Name
                </v-list-item-content> 
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Discipline: Computer Engineering
              </p>  

              Summary: <br>
            <blockquote class="blockquote">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sapiente atque corrupti provident, iusto doloribus saepe hic eius quis earum laudantium distinctio ex obcaecati aspernatur qui reprehenderit nam dolore.</blockquote> 
                
              <span>Sample SIze: <code>nill</code> | Question Size: <code>10</code> </span>
              <div class="text-left">
                <v-btn rounded color="orange" dark>View</v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div> 
    </div> 
</template>


<style>
.list{
  margin-bottom: 100px;
}
</style>

<script>  

export default {
  name: 'template',

  components: {   
  },

  data(){
    return{
      searchWord: ''
    }
  },
  methods: {
    search: function(){
      alert(this.searchWord)
    }
  }
};
</script>
