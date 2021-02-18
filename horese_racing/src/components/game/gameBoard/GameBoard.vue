<template>
    <div class="game-board">
      <div class="game-board--left"><HorseList/></div>
      <div class="game-board--center"><Track/></div>
      <div class="game-board--right">
        <div><ProgramList/></div>
        <div><ResultList/></div>
      </div>
    </div>
</template>

<script>
import HorseList from '@/components/game/gameBoard/horseList/HorseList'
import Track from '@/components/game/gameBoard/track/Track'
import ProgramList from '@/components/game/gameBoard/programs/ProgramList'
import ResultList from '@/components/game/gameBoard/results/ResultList'
export default {
  name: 'GameBoard',
  components: { ResultList, ProgramList, Track, HorseList }
}
</script>

<style scoped lang="scss" src="./GameBoard.scss">

</style>
