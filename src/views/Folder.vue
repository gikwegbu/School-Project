<template> 
    <div class="folder">
      <v-list> 
        <v-list-item>
            <v-list-item-avatar>
                <v-icon class="grey darken-1 white--text">mdi-folder</v-icon>
            </v-list-item-avatar>
            <v-list-item-content> 
                <v-col cols="12" sm="6" md="4">
                  <v-text-field  v-model="searchWord"  label="Folder" ></v-text-field>
                </v-col>
            </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="grey darken-1 white--text text-center mt-12" v-if="filteredFile.length == 0">
        <h3>No files exists</h3>
      </div>

      
      <div class="list" v-else>
        <v-expansion-panels focusable inset>
          <v-expansion-panel  v-for="(file,index) in filteredFile" :key="index" >
            <v-expansion-panel-header>
              <v-list-item>
                <v-list-item-avatar>
                    <v-icon class="grey lighten-1 white--text">mdi-file</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    {{ file.projectTopic }}
                </v-list-item-content> 
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Discipline: {{ file.projectDiscipline  }}
              </p>  

              Summary: <br>
            <blockquote class="blockquote">
              {{ file.projectSummary  }}  
            </blockquote> 
                
              <span>Sample SIze: {{ file.projectSampleSize  }} | Question Size: {{ file.projectQuestionSize  }}</span>
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

import { mapState  } from 'vuex'

export default {
  name: 'folder',

  computed: {   
    ...mapState([
      'files'
    ]),
    filteredFile: function(){
      // This is a computed property which is used to return the files from the state, then filters it, by 
      // Passing a single argument to it, then returning that arguement targets individual objects in the files array of objects
      // this then matches it with the value of the searcheWord model 
      // normally, it returns a Boolean, i.e if it's true, then new arrays will be pushed into the files state, else nothing for you lol :(
          
      return this.files.filter((file)=>{
        return file.projectTopic.match(this.searchWord)
      })
    }
  },

  data(){
  return{
    searchWord: ''
  }
  }, 
  methods: { }
};
</script>
