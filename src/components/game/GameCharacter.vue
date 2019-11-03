<template>
<div class="md-layout md-gutter md-alignment-top-center"> <div class="full-control md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    <img :src="characterPath"/>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GameCharacter extends Vue {
  publicPath: string = process.env.BASE_URL;
  characterChoice: string = 'man';
  characterActivity: string = 'Moving';
  characterPath: string= this.publicPath + 'characters/' + this.characterChoice + '/' + this.characterChoice + this.characterActivity + '.png';

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>