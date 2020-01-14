<template>
  <div class="text-center"> 
    <!-- Here to accept a call function from the parent, write the function first of what you wish to achieve, then on the parent
    where the child component is called, add an attribute of ref='Toast', then in the parent methods, within a function
    , use this.$refs.{the child ref name, in this case Toast }.{the child's method name in this case ToastDisplay}(the arguement, in this case 'Display')
     -->
    <v-snackbar  v-model="snackbar" bottom :color='ToastType' :timeout="timeout" >
      {{ ToastMsg }}
      <v-btn color="blue" text @click="snackbar = false" >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
      props: {
          ToastType: String, 
          ToastMsg: String   
      },
    data: () => ({
      snackbar: false, 
      timeout: 2000,
    }), 
    methods: {
        ToastDisplay: function(display){
          this.snackbar = display
        }
    }
  }
</script>