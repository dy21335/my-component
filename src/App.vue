<template>
  <div id="app">
    <!--<router-view/>-->
    <load size="14px" :radius= '100' > </load>
  </div>
</template>

<script>
import load from '@/components/dotLoading'
export default {
  name: 'App',
  components: {load},
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
