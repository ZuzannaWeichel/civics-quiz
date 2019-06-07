<template>
    
    <div  id="mainMenu">

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
           <h2 id="mainText"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eius dignissimos consequuntur nobis sapiente, vel odio expedita dolor, ea cupiditate dolores nulla quam provident itaque similique ipsam est. Saepe, molestias!
               </h2>
        </v-text>
       <v-actions>
        <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            fixed
            color="transparent"
        >
            <v-btn
                href="/all"
                color="indigo"
                flat
                value="all"
            >
                <span>All</span>
                <v-icon>grade</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                value="americanGov"
            >
                <span>Government</span>
                <v-icon>flag</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                value="americsnHist"
            >
                <span>History</span>
                <v-icon>import_contacts</v-icon>
            </v-btn>

            <v-btn
                color="indigo"
                flat
                value="integratedCiv"
            >
                <span>Integrated Civics</span>
                <v-icon>public</v-icon>
            </v-btn>

        </v-bottom-nav>
        </v-actions>

        </v-card>
        </v-flex>
        </v-layout>

    </div>
</template>

<script>
import { finished } from 'stream';
import { log } from 'util';
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
            bottomNav: 'recent'
        }

    },
    methods: {

    }
    
}
</script>

<style>
html,body{margin:0;padding:0;}
#mainMenu{
    display: flex;
    justify-content: center;
}
#mainCard{
    height: 80vh;
    background-color: #e9e0d8;
    margin-top: 30px;
}
#mainText{
    margin: 7%;
}


</style>


