<template>
  <div id="app">
    <!--<router-link :to="{ name: 'singlePge'}">User</router-link>-->
    <router-view/>
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
