<template>
  <div>
    <img :src="imgSrc">
        <p>
          中华小当家
        </p>
  </div>
</template>

<script>
export default {
  name: 'SinglePage',
  props: [
    'imgSrc',
    'paragraph'
  ]
}
</script>

<style scoped>
  div{
    background-color: #F6C6CE;
  }
  img{
    width: 480px;
    height: 600px;
  }

</style>
