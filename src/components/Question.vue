<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="margin">
                    <v-progress-linear id="progress" v-model="bar"  color="indigo" height="20"
                    >{{counter}}/{{questions.length}}</v-progress-linear>
                    
                    <v-img
                    v-bind:src=imgSrc
                    aspect-ratio="3.75"
                    ></v-img>

                    <div>
                        <v-chip color="green" text-color="white">
                            {{correct}}
                            <v-icon right>check_circle_outline</v-icon>                            
                        </v-chip>
                        <v-chip color="red" text-color="white">
                            {{incorrect}}
                            <v-icon right>highlight_off</v-icon>                            
                        </v-chip>
                    </div>

                    <v-card-title primary-title  class="height">
                        <div>
                            <h3 class="headline mb-0">{{questions[counter].question}}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions v-show="!answerIsShowing" class="spaced">
                        <v-btn v-on:click="scoreAndIncrement" flat color="green">I know</v-btn>
                        <v-btn v-on:click="scoreAndShowAnswer" flat color="orange">I don't know</v-btn>
                    </v-card-actions>
                    
                    <v-card-actions>
                         <v-btn fab dark color="indigo" v-on:click="showAnswer" class="btn-margin">
                            <v-icon dark>explore</v-icon>
                        </v-btn>
                    </v-card-actions>    
                    
                </v-card>
                <v-card v-show="answerIsShowing">
                   
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
    
    props: {
        imgSrc: {
        type: String,
        required: true
        }
    }
    ,
    data () {
        return {
            questions: [],
            counter: 0,
            answerIsShowing: false,
            bar: 0,
            correct: 0,
            incorrect: 0 
        }
    },
    methods: {
 
        increment: function (){
            this.counter++;
            this.answerIsShowing = false;
            this.bar = Math.round(this.counter * 100 / this.questions.length);
        },
        showAnswer: function(){
            this.answerIsShowing = true;
        },
        formatAnswer: function(string){
            var arr = string.split("|");
            var ans = "";
            for (var i = 0; i < arr.length; i++){
                ans+="<li>"+arr[i]+"</li>"
            }
            return ans;      
        },
        scoreAndIncrement: function(){
            this.increment();
            this.correct++;
        },
        scoreAndShowAnswer: function(){
            this.showAnswer();
            this.incorrect++;
        },
 
    },
    created() {
        this.$http
            .get('http://localhost:8888/api/inquiries/history')
            .then(function(data){
                this.questions = data.body;
            });
    }

}
</script>

<style>
#progress{
    margin: 0;
    text-align: center; 
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


