<template> 
  <div class="new">  
    <div>  
      <v-list-item>
        <v-list-item-avatar>
            <v-icon class="grey darken-1 white--text">mdi-account-badge-horizontal-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content> 
          Questionnaire Setup
        </v-list-item-content>
      </v-list-item> 
      <v-card class="mx-auto" max-width="98%" outlined >
        <v-list-item two-line>
          <v-list-item-content>
            <div class="overline mb-4 text-red">Instruction</div>
            <v-list-item-subtitle>
              <ul>
                <li>Provide <b>Topic</b> of the Research</li>
                <li>Provide the <b>Research Discipline</b></li>
                <li>Provide a <b>Summary</b> of the Research</li>
                <li>Provide <b>Response type</b> for each Question</li>
                <li>Provide the <b>Sample size</b> and <b>Question number</b></li>
                <li>Click on <b>Add Button</b> to provide Questions</li>
                <li>Click on <b>Build</b> to Generate the Questionnaire</li>
                <!-- <li>Fields with <b>*</b> means it's required</li> -->
              </ul> 
              <div class="overline mt-2 text-red"><b>*</b> means field is required</div>
            </v-list-item-subtitle>
            <div class="mt-2">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Proect Topic*" v-model="formatQuestion.topic" hint="what is the topic of your research" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Proect Disclipline*" v-model="formatQuestion.discipline" hint="what field of life is this research related to?" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-textarea label="Project Summary*" v-model="formatQuestion.summary" row-height="10px" loading auto-grow hint="Give a brief summary of what your topic is about"></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Sample Size*" v-model="formatQuestion.sample" min="1" step="1" type="number" hint="how many people are you looking to question?"  required ></v-text-field>
                  </v-col> 
                  <v-col cols="12" sm="6">
                    <v-text-field label="Question Number*" v-model="formatQuestion.question" min="1" step="1" type="number" hint="how questions do you want to ask each respondent"  required ></v-text-field>
                  </v-col>  
                </v-row>
                <div class="text-center">
                  <v-btn @click="showQuestions()" rounded color="orange mt-4" dark>
                    Add 
                    <v-icon>mdi-database-edit</v-icon>
                  </v-btn>
                </div>

                <!-- This is the component for Toast Alert -->
                <Toast ref="Toast" :ToastMsg="props.ToastMsg" :ToastType='props.ToastType'/>
                <!-- The Toast alert ends here -->
              </v-container>
            </div>
          </v-list-item-content> 
        </v-list-item> 
      </v-card> <br><br><br>
    </div> 

    <div v-show="listQuestions" class="questionSets">
      <v-list-item>
        <v-list-item-avatar>
            <v-icon class="grey darken-1 white--text">mdi-account-badge-horizontal-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content> 
          Question Set
        </v-list-item-content>
      </v-list-item> 
      <hr class="mx-auto" style="width: 90%"> <br>

      <div v-for="(item, index) in questionSize" :key="index">
        <Question :index="index" />
      </div>

      <v-btn @click="buildQuestionnaire" rounded color="orange" dark>Build Questionnaire</v-btn>

    </div>

  </div> 
</template>

<style>
  .text-red{
    color: rgba(212, 40, 40, 0.911);
  }
  .v-input{
    margin-bottom: -30px;
  }
  .questionSets{
    margin-bottom: 80px;
  }
</style>
// 08038765258
<script> 
import Question from '../components/SetQuestion'
import Toast from '../components/ToastAlert'

export default {
  name: 'new',

  components: {  
    Question,
    Toast,
  }, 
  data(){
    return{
      active: "v-item--active",
      listQuestions: false,
      formatQuestion:{
        topic: '',
        discipline: '',
        summary: '',
        sample: null,
        question: null
      },
      questionSize: null,
      props:{
        ToastType: null,
        ToastMsg: null
      }
    }
  },
  methods: {
    showQuestions: function(){
      const { topic, discipline, summary, sample, question  } = this.formatQuestion
      if(topic && discipline && summary && sample && question){
        this.questionSize = parseInt(this.formatQuestion.question)
        this.listQuestions = true
      }else{ 
        this.$refs.Toast.ToastDisplay('true')
        this.props.ToastType = 'error'
        this.props.ToastMsg = 'Please fill all fields'
      } 
    },
    buildQuestionnaire: function(){
      alert('built')
    }
  }
};
</script>
