<template>
  <div class="wrapper">
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
    </div>
    <transition name="slide-fade" @after-enter="afterEnter">
      <SinglePage v-show="isShow" :imgSrc="currentImgSrc" class="page"></SinglePage>
    </transition>
  </div>
</template>

<script>
import Bus from '../api/busEvent'
import SinglePage from '@/components/SinglePage'
export default {
  name: 'RecycleListView',
  data () {
    return {
      items: [
        { src: require('../assets/1.jpg') },
        { src: require('../assets/3.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/3.jpg') },
        { src: require('../assets/1.jpg') },
        { src: require('../assets/3.jpg') },
        { src: require('../assets/1.jpg') }
      ],
      elems: {
        content: {},
        list: {}
      },
      isShow: false,
      clickable: true,
      canScroll: true,
      currentImgSrc: require('../assets/1.jpg'),
      currentItem: {},
      singlePage: false
    }
  },
  components: {
    SinglePage
  },
  methods: {
    afterEnter () {
      console.log('afterEnter')
    },
    //  行不通
    init () {
      this.elems.content = this.$refs.content
      this.elems.list = this.$refs.list
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
    //  点击图片放置顶部事件
    toTop (index, ev) {
      var context,
        div,
        height,
        margin,
        gapY
      context = this
      // this.canScroll = false
      if (this.clickable === false) return
      div = this.$refs.content
      height = window.getComputedStyle(ev.currentTarget).height
      margin = window.getComputedStyle(ev.currentTarget).marginBottom
      gapY = -(index * (parseFloat(height) + parseFloat(margin)) - div.scrollTop)
      ev.currentTarget.style.transform = `translateY(${gapY}px) scale(1.2)`
      ev.currentTarget.style.zIndex = '1000'
      ev.currentTarget.childNodes[0].style.borderRadius = '0'
      this.clickable = false
      this.currentImgSrc = this.items[index].src
      this.currentItem = ev.currentTarget
      this.singlePage = false
      ev.currentTarget.addEventListener('transitionend', () => {
        if (context.singlePage) return
        context.singlePage = true
        context.isShow = true
        // ev.currentTarget.removeEventListener('transitionend')
      })
    }
  },
  beforeCreate () {
    Bus.$on('toggleIsShow', (elem) => {
      this.currentItem.style = ''
      this.currentItem.childNodes[0].style.borderRadius = '40px'
      this.isShow = false
      this.clickable = true
      this.singlePage = true
    })
  },
  beforeMount () {
    // this.init()
  },
  mounted () {
    var div = document.getElementById('content')
    // 添加边缘回弹动画
    div.addEventListener('scroll', (ev) => {
      if (div.clientHeight + div.scrollTop >= div.scrollHeight) {
        this.edgeBounce(div)
      }
    })
    div.addEventListener('mousewheel', (ev) => {
      console.log('mousewhell', ev.deltaY)
      // ev.preventDefault()
      // ev.currentTarget.scrollTop = ev.deltaY + 32
      if (!this.canScroll) {
        ev.preventDefault()
      }
    })
  }
}
</script>

<style scoped>
  .wrapper{
    margin: auto;
    width: 480px;
    transform:translate(0,0);
  }
  .content{
    position:relative;
    margin: 300px auto;
    width: 480px;
    height: 800px;
    background-color: #FFCC99;
    overflow: auto;
  }
  .content::-webkit-scrollbar{
    display: none;
  }

  ul{
    margin: auto;
    padding: 0;
    list-style: none;
    overflow: auto;
    width: 100%;
  }
  ul .item{
    width: 400px;
    height: 500px;
    position: relative;
    margin: 0px auto 20px auto;
    transition: transform .8s;
    transform-origin: top;
    transform: scale(1);
    /*background-color: #FFCCCC;*/
  }
  ul .item:active{
    transform: scale(0.9);
  }
  img{
    box-shadow: 0px 5px 12px #4F4F4F;
    border-radius: 40px;
    width: 100%;
    height: 100%;
    transition: border-radius 1s;
  }
  .last-child{
    text-align: center;
    height: 70px;
  }
  .page{
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    /*transform: translateY(100px);*/
  }
  .slide-fade-enter-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    height: 800px;
    opacity: 0;
    /*border-radius: 40px;*/
  }
  .slide-fade-leave-active{
    transition: all .8s;
  }

  .slide-fade-leave-to{
    opacity: 0;
    /*transform: scaleY(0);*/
    /*transform-origin: center;*/
  }
</style>
