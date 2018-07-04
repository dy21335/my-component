<template>
  <div ref="content" id="content" class="content">
    <ul ref="list" class="list" >
      <li ref="firstChid" id="fist-item"></li>
      <li v-for="(item, key) in items" :key="key" class="item">
        <SinglePage :imgSrc="item.src"></SinglePage>
      </li>
      <li ref="lastChild" class="last-child">
        已经到底部啦~
      </li>
    </ul>
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
      }
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
      if (content.clientHeight + content.scrollTop < content.scrollHeight - 90) {
      } else {
        content.scrollTop -= this.easeInOutQuint(0.63, 0.9, 0.7, 1)
        console.log(content.scrollTop)
        window.requestAnimationFrame(this.edgeBounce.bind(null, content))
      }
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
    position: relative;
    height: 210px;
    margin: 10px;
    /*background-color: #FFCCCC;*/
  }
  img{
    width: 300px;
  }
  .last-child{
    text-align: center;
    height: 70px;
  }
</style>
