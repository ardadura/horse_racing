<template>
  <div class="main">
    <Game msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/game/Game.vue'

export default {
  name: 'Main',
  components: {
    Game
  }
}
</script>
