<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <wish-list msg="Welcome to Your Vue.js App"/> -->
    <h1 class="md-headline">Ønskeseddel</h1>
    <wish-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import WishList from '@/components/WishList.vue';

export default {
  name: 'home',
  components: {
    WishList
  }
}
</script>
