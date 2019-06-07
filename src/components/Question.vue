<template>
    <div id="question-vue">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="margin">
                    <v-img
                    src="/img/allQ.jpg"
                    aspect-ratio="3.75"
                    ></v-img>

                    <v-card-title primary-title  class="height">
                        <div>
                            <h3 class="headline mb-0">{{questions[counter].question}}</h3>
                            <!-- <div> {{ card_text }} </div> -->
                        </div>
                    </v-card-title>

                    <v-card-actions class="spaced">
                        <v-btn v-on:click="increment" flat color="green">I know</v-btn>
                        <v-btn v-on:click="showAnswer" flat color="orange">I don't know</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                         <v-btn fab dark color="indigo" v-on:click="showAnswer" class="btn-margin">
                            <v-icon dark>explore</v-icon>
                        </v-btn>
                    </v-card-actions>    
                    
                </v-card>
                <v-card v-show="giveAnswer">
                    <v-card-title primary-title>
                        <h4 class="headline mb-0"><ul v-html="formatAnswer(questions[counter].answer)"></ul></h4>     
                    </v-card-title>
                    <v-card-actions class="toTheRight">
                        <v-btn fab dark color="indigo" v-on:click="increment" class="btn-margin">
                            <v-icon dark>arrow_right_alt</v-icon>
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
 

<script>
import { finished } from 'stream';
import { log } from 'util';
export default {
    data () {
        return {
            questions: [],
            counter: 0,
            giveAnswer: false,
            answerFormated: []
        }
    },
    methods: {
        increment: function (){
            this.counter++;
            this.giveAnswer = false;
        },
        showAnswer: function(){
            this.giveAnswer = true;
        },
        formatAnswer: function(string){
            var arr = string.split("|");
            var ans = "";
            for (var i = 0; i < arr.length; i++){
                ans+="<li>"+arr[i]+"</li>"
            }
            console.log(ans)
            return ans;      
        }
    },
    created() {
        this.$http
            .get('http://localhost:8888/api/inquiries')
            .then(function(data){
                this.questions = data.body;
            });
    }

}
</script>

<style>
#question-vue{
   
}
.margin{
    margin: 5% 0 5% 0;
    height: 50vh;
}
.height{
    height: 15vh;
}
.spaced{
    display: flex;
    justify-content: space-evenly;
}
.toTheRight{
    display: flex;
    justify-content: flex-end;
}
.btn-margin{
    margin: 2%;
}

</style>


