<template>
  <div>
    <show-question
      v-bind:imgSrc="imgSrc"
      v-bind:questions="questions"
    ></show-question>
  </div>
</template>

<script>
import Question from '../components/Question.vue'

export default {
  components: {
    'show-question': Question
  },
  data () {
    return {
      imgSrc: '/img/allQ.jpg',
      questions: []
    }
  },
  created () {
    this.$http
      .get('https://civics-quiz-api-default-rtdb.firebaseio.com/.json')
      .then(function (data) {
        if (this.subcategory === 'order') {
          this.questions = data.body
        }
        if (this.subcategory === 'random') {
          this.questions = data.body.sort((a, b) => 0.5 - Math.random())
        }
        if (this.subcategory === 'ten') {
          this.questions = data.body.sort((a, b) => 0.5 - Math.random()).slice(0, 10)
        }
      })
  },
  props: {
    subcategory: {
      type: String,
      default: 'order'
    }
  }
}
</script>
