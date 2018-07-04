<template>
  <div ref="content" id="content" class="content">
    <ul ref="list" class="list" >
      <li ref="firstChid" id="fist-item"></li>
      <li v-for="(item, index) in items" :key="index" class="item" @click="toTop(index,$event)">
        <img :src="item.src"/>
      </li>
      <li ref="lastChild" class="last-child">
        已经到底部啦~
      </li>
    </ul>
    <SinglePage v-show="isShow" class="page"></SinglePage>
  </div>
</template>

<script>
import SinglePage from '@/components/SinglePage'
export default {
  name: 'RecycleListView',
  data () {
    return {
      items: [
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/2.jpg') }
      ],
      elems: {
        content: {},
        list: {}
      },
      isShow: false
    }
  },
  components: {
    SinglePage
  },
  methods: {
    //  行不通
    init () {
      this.elems.content = this.$refs.content
      this.elems.list = this.$refs.list
      console.log(this.$refs.hasOwnProperty('list'))
    },
    //  cubic函数
    easeInOutQuint (t, b, c, d) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    },
    //  边缘回弹动画
    edgeBounce (content) {
      if (content.clientHeight + content.scrollTop < content.scrollHeight - 80) {
      } else {
        content.scrollTop -= this.easeInOutQuint(0.63, 0.9, 0.7, 1)
        window.requestAnimationFrame(this.edgeBounce.bind(null, content))
      }
    },
    //  点击图片放置顶部
    toTop (index, ev) {
      var div = this.$refs.content
      //   var div = document.getElementById('content')
      var height = window.getComputedStyle(ev.currentTarget).height
      var margin = window.getComputedStyle(ev.currentTarget).marginTop
      var gapY = -(index * (parseInt(height) + parseInt(margin)) - div.scrollTop)
      ev.currentTarget.style.transform = `translateY(${gapY}px) scale(1.2)`
      // ev.currentTarget.style.transform = 'scale(1)'
      // ev.currentTarget.style.height = '300px'
      // console.log(ev.target.style)
    }
  },
  beforeMount () {
    this.init()
  },
  mounted () {
    var div = document.getElementById('content')
    // 添加边缘回弹动画
    div.addEventListener('scroll', (ev) => {
      if (div.clientHeight + div.scrollTop >= div.scrollHeight) {
        this.edgeBounce(div)
      }
    })
  }
}
</script>

<style scoped>
  .content{
    position:relative;
    margin: auto;
    width: 500px;
    height: 400px;
    background-color: #FFCC99;
    overflow: auto;

  }

  ul{
    margin: auto;
    text-align: center;
    list-style: none;
    padding: 0;
    overflow: hidden;
  }
  .item{
    text-align: center;
    width: 400px;
    position: relative;
    height: 210px;
    margin: 10px;
    transition: top 2s,transform 2s;
    transform-origin: 0 0;
    /*background-color: #FFCCCC;*/
  }
  img{
    width: 100%;
    height: 100%;
  }
  .last-child{
    text-align: center;
    height: 70px;
  }
  .page{
    position: absolute;
    top: 190px;
    left: 0;
    background-color: #ff7611;
    height: 210px;
    overflow: auto;
    z-index: 1000;
  }
</style>
