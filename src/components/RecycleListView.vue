<template>
  <div class="test">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecycleListView'
}
</script>

<style scoped>
  .test{
    width: 80px;
    height: 100px;
    background-color: #0074D9;
    overflow: hidden;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    width: 100%;
    height: 40px;
    margin: 10px;
    background-color: #7f7f7f;
  }
</style>
