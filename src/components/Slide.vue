<template>
  <v-carousel>
    <!-- <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item> -->
    <v-carousel-item  src="../assets/img/slide/1.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/2.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/3.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/4.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/5.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/6.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    <v-carousel-item src="../assets/img/slide/7.jpg" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>