<template>
  <div class="house">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <wish-list msg="Welcome to Your Vue.js App"/> -->
    <h1 class="md-headline"><md-icon>house</md-icon> Flytte til Siøvej 2 <md-icon>house</md-icon></h1>
    <!-- <wish-list/> -->
    <countdown class="counter" :doneTime="new Date('Feb 1, 2020 12:00:00').getTime()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'house',
  components: {
    Countdown
  }
}
</script>

<style scoped>
.house {
  background: url('../assets/hus.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  padding-top: 10px;
}

.counter {
  font-size: 1.5em;
}
</style>