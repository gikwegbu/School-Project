<template>
  <v-card class="mx-auto mb-4" max-width="98%" > 
      <!-- <v-card-title>{{ index + 1 }}.Question: </v-card-title>   -->

    <v-card-text class="text--primary">
        <v-row>
           <v-col cols="12" sm="12">
                <!-- <v-text-field :label="'Question ' +   index+1" hint="Enter the Question" required></v-text-field> -->
                <v-text-field v-model="Question.name" :label="`Question ${index+1}`" hint="Enter the Question" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
                <v-select v-model="Question.response" @change="reveal" :items="items" label="Response type" ></v-select>
            </v-col>
            <v-col v-show="show" cols="12" sm="12">
                <v-text-field v-model="Question.options" label="Options*" hint="what field of life is this research related to?" required></v-text-field>
            </v-col>
       </v-row>
    </v-card-text> 
  </v-card>
</template>

<style>

</style>

<script>
export default { 
    props: {
        index: Number
    },
    data(){
        return {
            Question: {
                name: [],
                response: [],
                options: []
            },
            show: false,
            items: ['Text', 'Single Option', 'Multiple Options', 'Range'],
        }
    },
    methods: {
        reveal(e){
            if(e == 'Text') this.show = false;
            else this.show = true;
        },
        form(name){
            // let { name  } = this.Question;
            console.log(name);
        }
    
    }
}
</script>