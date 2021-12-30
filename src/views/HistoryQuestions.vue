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
      imgSrc: '/img/americanHist.jpg',
      questions: []
    }
  },
  created () {
    this.$http
      .get('https://civics-quiz-api-default-rtdb.firebaseio.com/.json')
      .then(function (data) {
        const questions = data.body.filter(question => question.category === 'American History').sort((a, b) => 0.5 - Math.random())
        if (this.subcategory === 'all') {
          this.questions = questions
        }
        if (this.subcategory === 'colonial') {
          this.questions = questions.filter(question => question.subcategory === 'Colonial Period and Independence')
        }
        if (this.subcategory === '1800s') {
          this.questions = questions.filter(question => question.subcategory === '1800s')
        }
        if (this.subcategory === 'recent') {
          this.questions = questions.filter(question => question.subcategory === 'Recent American History and Other Important Historical Information')
        }
      })
  },
  props: {
    subcategory: {
      type: String,
      default: 'all'
    }
  }
}
</script>
