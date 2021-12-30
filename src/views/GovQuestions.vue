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
      imgSrc: '/img/americanGov.jpg',
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
        if (this.subcategory === 'principles') {
          this.questions = questions.filter(question => question.subcategory === 'Principles of American Democracy')
        }
        if (this.subcategory === 'systems') {
          this.questions = questions.filter(question => question.subcategory === 'System of Government')
        }
        if (this.subcategory === 'rights') {
          this.questions = questions.filter(question => question.subcategory === 'Rights and Responsibilities')
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
