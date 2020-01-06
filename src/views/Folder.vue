<template> 
    <div class="folder">
      <v-list> 
        <v-list-item>
            <v-list-item-avatar>
                <v-icon class="grey darken-1 white--text">mdi-folder</v-icon>
            </v-list-item-avatar>
            <v-list-item-content> 
                <v-col cols="12" sm="6" md="4">
                  <v-text-field @keypress.prevent="search()" v-model="searchWord"  label="Folder" ></v-text-field>
                </v-col>
            </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="list">
        <v-expansion-panels focusable inset>
          <v-expansion-panel  v-for="(item,i) in 10" :key="i" >
            <v-expansion-panel-header>
              <v-list-item>
                <v-list-item-avatar>
                    <v-icon class="grey lighten-1 white--text">mdi-file</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    File Name
                </v-list-item-content> 
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Discipline: Computer Engineering
              </p>  

              Summary: <br>
            <blockquote class="blockquote">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sapiente atque corrupti provident, iusto doloribus saepe hic eius quis earum laudantium distinctio ex obcaecati aspernatur qui reprehenderit nam dolore.</blockquote> 
                
              <span>Sample SIze: 30 | Question Size: 20</span>
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
  name: 'folder',

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
