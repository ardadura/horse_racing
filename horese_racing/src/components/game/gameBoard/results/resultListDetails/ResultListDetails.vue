<template>
  <div class="result-list-details">
    <div class="result-details">
      <p>Lap {{result.lap}} - {{result.trackLength}}</p>
      <div class="result-details__header">
        <div class="result-details__header--position">Position</div>
        <div class="result-details__header--name">Name</div>
      </div>
      <div class="result-list-details__results">
        <div v-for="(horse, index) in result.results" :key="index" class="result-details__content">
          <div class="result-details__content--position">{{index+1}}</div>
          <div class="result-details__content--name">{{horse.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultListDetails',
  props: {
    result:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" src="./ResultListDetails.scss"/>
