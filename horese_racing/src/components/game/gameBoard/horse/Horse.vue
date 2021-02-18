<template>
  <div class="horse">
    <h4>Lap {{activeLap && activeLap.lap || '-' }} @ {{activeLap && activeLap.trackLength || '-' }}m </h4>
    <div v-for="(horse, index) in activeLap && activeLap.horses" :key="index" class="horse-racing">
      <div class="game-track__content--lane">{{index+1}}</div>
      <div class="game-track__content--race" :style="{width: `${activeLap.trackLength/4}px`}">
        <HorseSvg :horse="horse" :width="activeLap.trackLength"/>
      </div>
    </div>
  </div>
</template>

<script>
import HorseSvg from '@/components/game/gameBoard/horse/HorseSvg'
export default {
  name: 'Horse.vue',
  components: { HorseSvg },
  props: {
    activeLap: {
      type:Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss" src="./Horse.scss">

</style>
