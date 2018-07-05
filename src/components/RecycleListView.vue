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
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/1.jpg') }
      ],
      elems: {
        content: {},
        list: {}
      },
      isShow: false,
      clickable: true
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
      if (this.clickable === false) return
      var div = this.$refs.content
      var height = window.getComputedStyle(ev.currentTarget).height
      var margin = window.getComputedStyle(ev.currentTarget).marginBottom
      var gapY = -(index * (parseInt(height) + parseInt(margin)) - div.scrollTop)
      ev.currentTarget.style.transform = `translateY(${gapY}px) scale(2,1.3)`
      ev.currentTarget.childNodes[0].style.borderRadius = '0'
      this.clickable = false
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
    width: 600px;
    height: 800px;
    background-color: #FFCC99;
    overflow: auto;
  }

  ul{
    margin: auto;
    padding: 0;
    list-style: none;
    overflow: hidden;
    width: 100%;
  }
  ul .item{
    width: 300px;
    position: relative;
    margin: 0px auto 10px auto;
    transition: transform 2s;
    transform-origin: top;
    /*background-color: #FFCCCC;*/
  }
  img{
    border-radius: 40px;
    width: 100%;
    height: 100%;
    transition: border-radius 2s;
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
