<template> 
  <div class="new">  
    <!-- This will have a v-show='phase == 'development' ? true : false', where phase will be for development and production  -->
    <div v-show="phase == 'development' ? true : false">
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
                      <v-textarea label="Project Summary*" v-model="formatQuestion.summary" row-height="10px" auto-grow hint="Give a brief summary of what your topic is about"></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Sample Size*" v-model="formatQuestion.sample" min="1" step="1" type="number" hint="how many people are you looking to question?"  required ></v-text-field>
                    </v-col> 
                    <v-col cols="12" sm="6">
                      <v-text-field label="Question Number*" v-model="formatQuestion.question" min="1" step="1" type="number" hint="how questions do you want to ask each respondent"  required ></v-text-field>
                    </v-col>  
                  </v-row>
                  <div class="text-center">
                    <v-btn @click="showQuestions()" rounded color="orange mt-6" dark>
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
          <v-card class="mx-auto mb-4" max-width="98%" >  

          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="12" sm="12">
                    <v-text-field v-model="Question.name[index]" :label="`Question ${index+1}`" hint="Enter the Question" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="Question.response[index]"  :items="items" label="Response type" ></v-select>
                </v-col>
                <v-col v-show="Question.response[index] == 'Text'? false:true  " cols="12" sm="12">
                    <v-text-field v-model="Question.options[index]" label="Options: separate each option with a comma*" hint="Please separate each option with a comma, e.g 10-20, 20-30" required></v-text-field>
                </v-col>
              </v-row>
            </v-card-text> 
          </v-card>
        </div>

        <v-btn @click="buildQuestionnaire" class="ml-4" rounded :color="buildBtn.state" dark>
          {{buildBtn.mode}} 
          <v-icon>{{buildBtn.icon}}</v-icon>  
        </v-btn>

      </div>
    </div>

    <div v-show="phase == 'production' ? true : false" class="production">
      <v-container>
        <v-card class="mx-auto mb-2 mt-2" max-width="98%"> 
          <v-card-text class="text-center">
            <span>A Research carried out on</span> <br>
            <span><b> {{formatQuestion.topic}}  </b></span> <br>  
            <span> From the Discipline of </span> <br>
            <span> <b> {{formatQuestion.discipline}}  </b>  </span> <br>
            <span>with <b> {{formatQuestion.sample}}  </b> sample size and <b> {{formatQuestion.question}}  </b> question set</span>
          </v-card-text>
        </v-card>
        
      </v-container>
      <div v-for="(item, index) in data" :key="index"> 
          <v-card class="mx-auto mb-4" max-width="98%" > 
            <v-card-title class="teal--text darken-4">
               Q.{{index+1}} 
               {{item.Qname}}
            </v-card-title>
            <v-card-text  v-if="item.Qresponse == 'Text'">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field label="Your answer*" v-model="newData.answer[index]"  hint="Provide a brief answer" required></v-text-field>
                </v-col>
              </v-row>
            </v-card-text> 

            <v-card-text  v-else-if="item.Qresponse == 'Multiple Options'">
              <v-row>
                <v-col cols="12">
                  <!-- NB: I didn't get the algorigthm of this checkbox -->
                  <v-checkbox v-for="(option, i) in item.Qoptions" :key="i" :value="option" v-model="newData.answer[index]" class="mx-2" :label="option"></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text> 

            <v-card-text  v-else>
               <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="newData.answer[index]"  row>
                    <!-- NB: v-model="something else" -->
                    <v-radio v-for="(option, i) in item.Qoptions" :key="i" :label="option" :value="option" ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text> 
             
 
          </v-card>
        </div>
         
        <v-card-actions>
          <v-btn @click="newRespondent()" color="orange ml-2 mr-4" dark rounded>New</v-btn> 
          <v-row>
            <v-dialog v-model="dialog" persistent max-width="98%">
              <template v-slot:activator="{ on }">
                <v-btn color="orange" v-on="on" dark rounded>Preview</v-btn> 
              </template>
              <v-card>
                <v-simple-table fixed-header height="auto">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left" v-for="(item, index) in questionSize" :key="index">Q  {{ index + 1 }}</th> 
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Two looping are carried out here, the first iterates through the exportData to get the objects keys corresponding values -->
                      <tr v-for="(item, index) in exportData" :key="index">
                        <!-- The second looping is used to grab just the values of the item, which is returned as an array, then iterate through the array to render the val -->
                        <td v-for="(val, i) in Object.values(item)" :key="i">{{ val  }}</td>   
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="teal darken-1" text @click="dialog = false">Export</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-btn color="teal ml-2"  dark rounded>Export</v-btn>  
        </v-card-actions> 
        <br><br><br>  
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
  .production .v-card__text .row{
    margin-top: -30px; 
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
    // Preview,
  }, 
  data(){
    return{
      active: "v-item--active",
      listQuestions: true,
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
      },
      Question: {
          name: [],
          response: [],
          options: []
      },
      items: ['Text', 'Single Option', 'Multiple Options', 'Range'],
      buildBtn: {
        mode: 'Build',
        icon: 'mdi-emoticon-kiss-outline', 
        state: 'orange'
      },
      phase: 'development',
      data: [], 
      newData: { 
        answer: []
       },
       exportData: [],
        dialog: false, 
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
      const _ = this; 

      this.buildBtn.mode = 'Building';
      this.buildBtn.icon = 'mdi-circle-edit-outline';
      this.buildBtn.state = 'default'
      let { name, response, options  } = this.Question;   
      setTimeout(() => {       
        for(let i = 0; i < name.length; i++){
          let Q = {
            Qname: name[i] == undefined ? ' ': name[i] ,
            Qresponse: response[i] == undefined ? ' ': response[i],
            Qoptions: options[i]== undefined ? ' ': options[i].split(',')
          }; 
          _.data.push(Q)     
        } 
        this.phase = 'production'
      }, 500);
      
    },
    newRespondent: function(){ 
      const _ = this;
      console.log(_.newData.answer.length)
      let { answer  } = _.newData;
      let A = {};
      for(let i = 0; i < _.newData.answer.length; i++){ 
        A[`Q${i + 1}`] = answer[i]   
      }
      _.exportData.push(A);
      _.newData.answer = []
       console.log(_.exportData)
    }
  }
};
</script>
