<template>
  <div>
    <show-question></show-question>
  </div>
</template>

<script>
  import Question from '../components/Question.vue';

  export default {
    components: {
      'show-question': Question
    }
  }
</script>