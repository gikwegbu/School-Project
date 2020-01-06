<template>
  <v-card class="mx-auto mb-4" max-width="98%" > 
      <!-- <v-card-title>{{ index + 1 }}.Question: </v-card-title>   -->

    <v-card-text class="text--primary">
        <v-row>
           <v-col cols="12" sm="12">
                <!-- <v-text-field :label="'Question ' +   index+1" hint="Enter the Question" required></v-text-field> -->
                <v-text-field :label="`Question ${index+1}`" hint="Enter the Question" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
                <v-select :items="items" label="Response type" ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
                <v-text-field label="Proect Disclipline*" hint="what field of life is this research related to?" required></v-text-field>
            </v-col>
       </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text >
        Share
      </v-btn>

      <v-btn color="orange"  text >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>

</style>

<script>
export default { 
    props: {
        index: Number
    },
    data: () => ({
      items: ['Text', 'Single Option', 'Multiple Options', 'Range'],
    }),
}
</script>