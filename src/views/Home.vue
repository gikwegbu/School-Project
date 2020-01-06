<template> 
    <div class="home">
      <!-- This is the section for Slide-carousel -->
      <Slide />
      <!-- This is the section for Slide-carousel -->

      <!-- This is the section for Recent-card --> 
      <div class="recentSection">
        <h1 class="pl-2">
          <v-icon before color="teal">mdi-emoticon-happy</v-icon>
          Recent Researches: 
        </h1> 
         <Recent />
      </div>
      <div class="text-center">
        <h3> 
          No Records yet. 
          <router-link to="/new">Start One </router-link>
         </h3>
      </div>
      <!-- This is the section for Recent-card -->

      


      


      


    <button @click="p()"> lol</button>
      
    </div> 
</template>

<style>
.recentSection{
margin: 20px 1px;
} 
.recentSection h1{
  color: rgb(83, 79, 79); 
 font-size: 30px; 
 margin-bottom: 20px;
 border-bottom: 1px solid rgb(83, 79, 79); 
}
</style>

<script> 
import Slide from '../components/Slide'
import Recent from '../components/Recent'


export default {
  name: 'home',
  components: {
    Slide,
    Recent
  },
  body(){
    return{ 
    }
  },
  methods: {
    p: function(){
      window.print()
    }
  }
};
</script>
