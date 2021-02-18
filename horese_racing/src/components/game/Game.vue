<template>
  <div class="game">
    <div class="game--top">
      <GameOptions/>
    </div>
    <div class="game--main">
      <GameBoard/>
    </div>
  </div>
</template>

<script>
import GameOptions from '@/components/game/gameOptions/GameOptions'
import GameBoard from '@/components/game/gameBoard/GameBoard'
import { mapGetters } from 'vuex'
export default {
  name: 'Game',
  components: { GameBoard, GameOptions },
  props: {},
}
</script>

<style lang="scss" src="./Game.scss"/>
