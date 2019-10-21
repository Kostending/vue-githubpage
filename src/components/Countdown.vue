<template>
  <div class="counter-container">
    <p>{{days}} Dage {{hours}} Timer {{minutes}} Minuter {{seconds}} Sekunder</p>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import wishes from '../assets/wish-data.json';
import WishCard from '@/components/WishCard.vue';

@Component
export default class Countdown extends Vue {
  @Prop() private doneTime!: number;

  now: number = new Date().getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  setCountDown() {
    this.now = new Date().getTime();
    let diff = this.doneTime - this.now;

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }

  mounted() {
    setInterval(() => {this.setCountDown()}, 1000);
  }
}
</script>
