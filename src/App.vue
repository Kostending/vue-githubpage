<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/wishes">Ønskeseddel</router-link> |
      <router-link to="/house">Hus</router-link> |
      <router-link to="/nurse">Sygeplejerske</router-link>
      <!-- <router&#45;link to="/movielist">Filmliste</router&#45;link>  -->
      <!-- <router-link to="/game">Game</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
