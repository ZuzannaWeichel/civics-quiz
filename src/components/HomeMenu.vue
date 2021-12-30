<template>

    <div id="mainMenu">
        <v-layout>
        <v-flex xs12 sm10 offset-sm1>
        <v-card id="mainCard">

        <v-img>
        <v-carousel id="mainCarousel">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        </v-img>
        <v-text>
           <h2 id="mainText">
                Naturalization study materials.
                <br />This app contains 2008 Civics Test version,
                <br />100 questions and answers updated for Ohio 2021.
            </h2>
        </v-text>
        </v-card>

        <v-actions>
        <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            fixed
            color= #e9e0d8
        >
            <v-btn
                color="indigo"
                flat
                v-on:click="showAllSub"
            >
                <span>All Questions</span>
                <v-icon>grade</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                v-on:click="showGovSub"
            >
                <span>Government</span>
                <v-icon>flag</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                v-on:click="showHistSub"
            >
                <span>History</span>
                <v-icon>import_contacts</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                v-on:click="showCivicSub"
            >
                <span>Integrated Civics</span>
                <v-icon>public</v-icon>
            </v-btn>
            <v-btn
                href="/all/ten"
                color="indigo"
                flat
            >
                <span>Practice test</span>
                <v-icon>mode</v-icon>
            </v-btn>
        </v-bottom-nav>

        <v-bottom-nav v-show="showAllSubNav"
            color= #e9e0d8
            grow
        >
            <v-btn
                href="/all/order"
                color="indigo"
                flat
                value="americanGov"
            >
                <span>Ordered</span>
            </v-btn>
            <v-btn
                href="/all/random"
                color="indigo"
                flat
                value="americanGov"
            >
                <span>Randomized</span>
            </v-btn>
        </v-bottom-nav>

        <v-bottom-nav v-show="showGovSubNav"
            color= #e9e0d8
            grow
        >
            <v-btn
                href="/government/all"
                color="indigo"
                flat
            >
                <span>All Government</span>
            </v-btn>
            <v-btn
                href="/government/principles"
                color="indigo"
                flat
            >
                <span>Principles of American Democracy</span>
            </v-btn>
            <v-btn
                href="/government/systems"
                color="indigo"
                flat
            >
                <span>System of Government</span>
            </v-btn>
            <v-btn
                href="/government/rights"
            >
                <span>Rights and Responsibilities</span>
            </v-btn>
        </v-bottom-nav>
        <v-bottom-nav v-show="showHistSubNav"
            color= #e9e0d8
            grow
        >
            <v-btn
                href="/history/all"
                color="indigo"
                flat
            >
                <span>All History</span>
            </v-btn>
            <v-btn
                href="/history/colonial"
                color="indigo"
                flat
            >
                <span>Colonial Period and Independence</span>
            </v-btn>
            <v-btn
                href="/history/1800s"
                color="indigo"
                flat
            >
                <span>1800's</span>
            </v-btn>
            <v-btn
                href="/history/recent"
            >
                <span>Recent American History</span>
            </v-btn>
        </v-bottom-nav>
         <v-bottom-nav v-show="showCivicSubNav"
            color= #e9e0d8
            grow
        >
            <v-btn
                href="/integrated/all"
                color="indigo"
                flat
            >
                <span>All Civics</span>
            </v-btn>
            <v-btn
                href="/integrated/geography"
                color="indigo"
                flat
            >
                <span>Geography</span>
            </v-btn>
            <v-btn
                href="/integrated/symbols"
                color="indigo"
                flat
            >
                <span>Symbols</span>
            </v-btn>
            <v-btn
                href="/integrated/holidays"
            >
                <span>Holidays</span>
            </v-btn>
        </v-bottom-nav>
        </v-actions>
        </v-flex>
        </v-layout>

    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/img/americanGov.jpg'
        },
        {
          src: '/img/americanHist.jpg'
        },
        {
          src: '/img/integratedCiv.jpg'
        },
        {
          src: '/img/allQ.jpg'
        }
      ],
      bottomNav: 'recent',
      showGovSubNav: false,
      showHistSubNav: false,
      showCivicSubNav: false,
      showAllSubNav: false
    }
  },
  methods: {
    showGovSub: function () {
      this.showGovSubNav = true
      this.showHistSubNav = false
      this.showCivicSubNav = false
      this.showAllSubNav = false
    },
    showHistSub: function () {
      this.showHistSubNav = true
      this.showGovSubNav = false
      this.showCivicSubNav = false
      this.showAllSubNav = false
    },
    showCivicSub: function () {
      this.showCivicSubNav = true
      this.showHistSubNav = false
      this.showGovSubNav = false
      this.showAllSubNav = false
    },
    showAllSub: function () {
      this.showAllSubNav = true
      this.showCivicSubNav = false
      this.showHistSubNav = false
      this.showGovSubNav = false
    }
  }
}
</script>

<style>
#mainMenu{
    display: flex;
    justify-content: center;
    height: auto;
}
#mainCarousel{
    height: 55vh !important;
}
#mainCard{
    height: auto;
    background-color: #e9e0d8;
    margin-top: 3vh;
}
#mainText{
    height: auto;
    margin: 2vh;
    padding: 2vh;
    font-size: calc(1vh + 1vw);
    font-family: 'Roboto', sans-serif
}
.theme--light.v-bottom-nav .v-btn:not(.v-btn--active) {
    color: #3f51b5 !important
}
</style>
