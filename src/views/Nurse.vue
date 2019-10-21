<template>
  <div class="nurse">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <wish-list msg="Welcome to Your Vue.js App"/> -->
    <h1 class="md-headline">💉 Sygeplejersker 💉</h1>
    <!-- <wish-list/> -->
    <countdown class="counter" :doneTime="new Date('Jan 15, 2019 10:50:00').getTime()"/>
    <h2>Tine, Malou og Stine</h2>

    <div class="md-layout md-gutter md-alignment-top-center pic-container">
            <div class="md-layout-item">
                <img src="../assets/nurse/pic1.jpeg" alt="pic1"/>
            </div>
            <div class="md-layout-item">
                <img src="../assets/nurse/pic2.jpeg" alt="pic2"/>
            </div>
            <div class="md-layout-item">
                <img src="../assets/nurse/pic3.jpeg" alt="pic3"/>
            </div>
        </div>
        <div class="md-layout-item naal-image-container">
            <img class="naal" src="http://taxamand.dk/wp-content/uploads/2015/01/sygepleje-3.jpg" alt="naal"/>
        </div>
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
.nurse {
  background: linear-gradient(#ffffff, #fff4f6, #fcc9d3, #cc2241);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  padding-top: 10px;
}

.pic-container {
  margin-right: 20%;
  margin-left: 20%;
}

.naal-image-container {
  padding-top: 20px;
}
</style>