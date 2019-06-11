<template>
  <v-app id="theApp">
    <v-toolbar app dark class="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <a href="/" id="homeLink"><span>USCIS </span>
        <span class="font-weight-light" >CIVICS QUIZ</span></a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://www.uscis.gov/citizenship/learners/apply-citizenship"
        target="_blank"
      >
        <span class="mr-2">USCIS Website</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>


<style>

#theApp{
  overflow: hidden;
  height: auto;
  background-image: url('/img/background/hip-square.png');
}
#homeLink{
  color: white;
  text-decoration-line: none
}
 
</style>
