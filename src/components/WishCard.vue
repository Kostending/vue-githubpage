<template>
    <!-- <p>yo {{ wish }}</p> -->
    <md-card class="md-primary " md-with-hover>
        <md-card-media v-if="wish.image">
            <img :src="wish.image" alt="People">
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{wish.title}}</div>
            <div class="md-subhead">{{wish.subtitle}}</div>
        </md-card-header>

        <!-- <md-card-content> -->
          <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. -->
        <!-- </md-card-content> -->

        <md-card-actions md-alignment="right" v-if="wish.link">
            <div>
                <md-button :href="wish.link" target="_blank" class="md-icon-button">
                    <md-icon>open_in_new</md-icon>
                </md-button>
            </div>
        </md-card-actions>
        

        <!-- <md-card-expand>
            <md-card-actions md-alignment="space-between">
            <div>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </div>

            <md-card-expand-trigger>
                <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
            </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
            </md-card-expand-content>
        </md-card-expand> -->
    </md-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WishCard extends Vue {
    @Prop() private wish!: JSON;

    mounted() {
        // console.log({wish});
    }
}
Vue.component('wish-card', WishCard);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .md-card {
       margin: 20px;
  }

    a {
        color: black;
    }

</style>