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
      imgSrc: '/img/integratedCiv.jpg',
      questions: []
    }
  },
  created () {
    this.$http
      .get('https://civics-quiz-api-default-rtdb.firebaseio.com/.json')
      .then(function (data) {
        const questions = data.body.filter(question => question.category === 'American Government').sort((a, b) => 0.5 - Math.random())
        if (this.subcategory === 'all') {
          this.questions = questions
        }
        if (this.subcategory === 'geography') {
          this.questions = questions.filter(question => question.subcategory === 'Geography')
        }
        if (this.subcategory === 'symbols') {
          this.questions = questions.filter(question => question.subcategory === 'Symbols')
        }
        if (this.subcategory === 'holidays') {
          this.questions = questions.filter(question => question.subcategory === 'Holidays')
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
