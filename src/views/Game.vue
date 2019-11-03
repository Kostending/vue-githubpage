<template>
  <div class="game">
      <game-character/>
  </div>
</template>

<script>
import GameCharacter from '@/components/game/GameCharacter.vue';

export default {
  name: 'game',
  components: {
      GameCharacter
  }
}
</script>

<style scoped>

</style>
