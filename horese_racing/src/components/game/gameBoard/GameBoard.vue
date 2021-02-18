<template>
    <div class="game-board">
      <div class="game-board--left"><HorseList/></div>
      <div class="game-board--center"><Track/></div>
      <div class="game-board--right">
        <ScheduleList/>
        <ResultList/>
      </div>
    </div>
</template>

<script>
import HorseList from '@/components/game/gameBoard/horseList/HorseList'
import Track from '@/components/game/gameBoard/track/Track'
import ScheduleList from '@/components/game/gameBoard/schedules/ScheduleList'
import ResultList from '@/components/game/gameBoard/results/ResultList'
export default {
  name: 'GameBoard',
  components: { ResultList, ScheduleList, Track, HorseList }
}
</script>

<style scoped lang="scss" src="./GameBoard.scss">

</style>
