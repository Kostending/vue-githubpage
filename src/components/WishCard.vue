<template>
    <md-card class="md-primary " md-with-hover>
        <md-card-media v-if="wish.image">
            <img :src="wish.image" alt="People">
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{wish.title}}</div>
            <div class="md-subhead">{{wish.subtitle}}</div>
        </md-card-header>

        <md-card-actions md-alignment="right" v-if="wish.link">
            <div>
                <md-button :href="wish.link" target="_blank" class="md-icon-button">
                    <md-icon>open_in_new</md-icon>
                </md-button>
            </div>
        </md-card-actions>
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