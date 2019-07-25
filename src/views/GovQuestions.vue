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
      .get('https://civics-quiz-api.herokuapp.com/api/inquiries/government')
      .then(function (data) {
        this.questions = data.body
      })
  }
}
</script>
