const mutations = {
  setGameStatus (state, payload) {
    state.gameStatus = payload
  },
  generateSchedule (state, payload) {
    state.schedule = payload
  },
  setActiveLap (state, payload) {
    state.activeLap = state.activeLap + 1
  },
  setActiveLapResult(state, payload){
    state.schedule.results[state.activeLap].results.push(payload)
  }
}

export default mutations
