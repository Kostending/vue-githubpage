<template>
<!-- <p> {{myWishes}} </p> -->
<div class="md-layout md-gutter" :class="`md-alignment-top-center`">
  <div class="full-control md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <div class="list">
      <md-list :md-expand-single="true">
        <md-list-item md-expand v-for="wish in myWishes" :key="wish.id">
          <span class="md-list-item-text">{{wish.title}}</span>

          <div slot="md-expand">
            <wish-card :wish="wish" />
          </div>
        </md-list-item>
      </md-list>
    </div>
  </div>
</div>
</template>

// <md-list-item v-for="wish in yo" :key="wish.id">
//               <p>{{wish.title}}</p>
//             </md-list-item>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import wishes from '../assets/wish-data.json';
import WishCard from '@/components/WishCard.vue';

@Component({
  components: {
    WishCard
  }
})
export default class WishList extends Vue {
  data() {
    return {
      myWishes: wishes.myWishes,
      yo: [
        {
          'title': 'hello',
          id: 0
        },
        {
          'title': 'world',
          id: 1
        },
        {
          'title': 'world',
          id: 2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

</style>