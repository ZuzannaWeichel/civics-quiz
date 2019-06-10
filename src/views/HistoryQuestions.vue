<template>
  <div>
    <show-question 
      v-bind:imgSrc="imgSrc"
      v-bind:questions="questions"
    ></show-question>
  </div>
</template>

<script>
  import Question from '../components/Question.vue';

  export default {
    components: {
      'show-question': Question
    },
    data (){
      return {
        imgSrc: "/img/americanHist.jpg",
        questions: []
      }
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