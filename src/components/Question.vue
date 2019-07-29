<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="question-card">
          <v-progress-linear id="progress" v-model="bar" color="indigo" height="20"
          >{{counter}}/{{questions.length}}</v-progress-linear>

          <v-img
          v-bind:src=imgSrc
          aspect-ratio="3.2"
          ></v-img>

          <div class="score-chips">
            <v-chip color="green" text-color="white">
              {{correct}}
              <v-icon right>check_circle_outline</v-icon>
            </v-chip>
            <v-chip color="red" text-color="white">
              {{incorrect}}
              <v-icon right>highlight_off</v-icon>
            </v-chip>
          </div>

          <v-card-title primary-title  class="title-height">
            <div v-show="!alertOn">
              <h3 class="headline mb-0">{{questions[counter-1].question}}</h3>
            </div>

            <v-alert id="alert-bar"
                v-model="alertOn"
                color="success"
                icon="new_releases"
            >
            Congratulations! Your score is {{score}}%
              <div>
                <v-chip v-on:click="reload" color="indigo" text-color="white">
                  <v-icon>autorenew</v-icon>
                </v-chip>
                <router-link to="/" style="text-decoration: none">
                  <v-chip color="indigo" text-color="white">
                    <v-icon>home</v-icon>
                  </v-chip>
                </router-link>
              </div>
            </v-alert>

          </v-card-title>

          <v-card-actions v-show="!hideButtons" class="spaced">
              <v-btn class='greenBtn' v-on:click="scoreAndIncrement" flat color="green">I know</v-btn>
              <v-btn id='redBtn' v-on:click="scoreAndShowAnswer" flat color="red">I don't know</v-btn>
          </v-card-actions>

          <v-card-actions v-show="!alertOn">
                <v-btn fab dark color="indigo" v-on:click="showAnswer" class="btn-margin">
                  <v-icon dark>explore</v-icon>
              </v-btn>
          </v-card-actions>

        </v-card>
        <v-card v-show="showAns" class="answer-card">

          <v-card-title primary-title>
              <h4 class="headline mb-0"><ul v-html="formatAnswer(questions[counter-1].answer)"></ul></h4>
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
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    questions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      counter: 1,
      hideButtons: false,
      showAns: false,
      bar: 0,
      correct: 0,
      incorrect: 0,
      score: 0,
      alertOn: false
    }
  },
  methods: {
    increment: function () {
      if (this.counter < this.questions.length) {
        this.counter++
        this.bar = Math.round(this.counter * 100 / this.questions.length + 1)
        this.hideButtons = false
        this.showAns = false
      } else {
        this.alertOn = true
        this.hideButtons = true
        this.showAns = false
        this.score = Math.round(this.correct * 100 / this.questions.length)
      }
    },
    showAnswer: function () {
      this.hideButtons = true
      this.showAns = true
    },
    formatAnswer: function (string) {
      var arr = string.split('|')
      var ans = ''
      for (var i = 0; i < arr.length; i++) {
        ans += '<li>' + arr[i] + '</li>'
      }
      return ans
    },
    scoreAndIncrement: function () {
      this.correct++
      this.increment()
    },
    scoreAndShowAnswer: function () {
      this.showAnswer()
      this.incorrect++
    },
    reload: function () {
      location.reload(true)
    }
  }
}
</script>

<style>
#progress{
    margin: 0;
    text-align: center;
    color: white;
}
.question-card{
    margin: 5% 0 5% 0;
}
.title-height{
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
.score-chips {
    display: flex;
    justify-content: flex-end;
    margin-right: 1.8%;
}
.answer-card {
    margin-bottom: 3%
}
#alert-bar{
    height: 100%;
    width: 100%;
    font-size: 2.5vh;
    font-weight: 400;
    text-align: center
}
</style>
