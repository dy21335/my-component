<template>
  <div>
    <div id="container">
      <img :src="imgSrc"/>
      <div id="downPage">
        <p>
          {{paragraph}}
        </p>
      </div>
    </div>
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
    height:100%;
  }
  img{
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

</style>
