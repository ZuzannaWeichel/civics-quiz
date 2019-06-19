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
      .get('http://localhost:8888/api/inquiries')
      .then(function (data) {
        this.questions = data.body
      })
  }
}
</script>
