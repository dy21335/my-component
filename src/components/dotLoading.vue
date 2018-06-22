<template>
  <div ref="container" class="container">
    <ul class="center-point">
      <li v-for="(dotStyle , index) in dotsStyle" :key="index" :style = "dotStyle" ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dotLoading',
  data () {
    return {
      dotsStyle: []
    }
  },
  props: {
    size: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: 'coral'
    },
    numbers: {
      type: Number,
      default: 14
    },
    radius: {
      type: Number,
      default: 100
    }
  },
  methods: {
    dotStyle (size, color) {
      var fixStr
      var rad
      var dotX
      var dotY
      for (let i = 0; i < this.numbers; ++i) {
        //  计算弧度
        rad = Math.PI * 360 / this.numbers * i / 180
        //  计算相对于圆心的x和y坐标
        dotX = Math.cos(rad) * this.radius
        dotY = Math.sin(rad) * this.radius
        fixStr = {width: size, height: size, borderRadius: size, top: -dotY + 'px', left: dotX + 'px', backgroundColor: this.color, animationDelay: 1 / this.numbers * i + 's'}
        this.dotsStyle.push(Object.assign({}, fixStr))
        console.log(`第${i}个圆点对应的坐标为：${dotX},${dotY}`)
      }
    }
  },
  beforeMount () {
    this.dotStyle(this.size, this.color)
  },
  mounted () {
    this.$refs.container.style.width = (this.radius + parseInt(this.size)) * 2 + 'px'
    this.$refs.container.style.height = (this.radius + parseInt(this.size)) * 2 + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center-point{
    top: 50%;
    left: 50%;
    position: relative;
    padding: 0;
    margin: 0;
    width: 1px;
    height: 1px;
    /*background-color: #660000;*/
  }
  li{
    visibility: hidden;
    position: absolute;
    /*background-color: coral;*/
    list-style: none;
    animation: blink 1s infinite forwards;
  }
  .container{
  margin: auto;
  }

  @keyframes blink {
    from{
      visibility: visible;
      opacity: 1;
      transform:scale(1);
    }
    50%{
      opacity: 50%;
      transform: scale(0.5);
    }
    to{
      opacity: 0;
      transform:scale(0);
    }
  }
</style>
