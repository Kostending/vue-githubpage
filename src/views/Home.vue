<template>
  <div class="md-layout home md-alignment-top-center">
    <md-card class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <md-card-media>
        <img src="../assets/anders.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Anders Kostending</div>
        <div class="md-subhead">IT Udvikler</div>
      </md-card-header>

      <!-- <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions> -->

      <md-card-content>
        <md-list class="md-double-line">
          <md-subheader>Telefon</md-subheader>

          <md-list-item>
            <md-icon class="md-primary">phone</md-icon>

            <div class="md-list-item-text">
              <span><a href="tel:+45-28-58-18-34">+45 28 58 18 34</a></span>
              <span>Mobil</span>
            </div>
          </md-list-item>

          <md-divider></md-divider>

          <md-subheader>Email</md-subheader>

          <md-list-item>
            <md-icon class="md-primary">email</md-icon>

            <div class="md-list-item-text">
              <span><a href="mailto:akostending@gmail.com">akostending@gmail.com</a></span>
            </div>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
// @ is an alias to /src
// import WishList from '@/components/WishList.vue';

export default {
  name: 'home',
}
</script>

<style scoped>
a {
  color: black;
}
</style>