<template>
  <div>
    <div id="icon">
    </div>
    <img :src="imgSrc">
        <p>
          文章的排版很重要，它可以突出文章的主题，让读者可以一口气读完它而不废气。好的排版更是能让人感到阅读的乐趣，毕竟文章是为了传达信息，如下图，如果下面是一则广告传单，你会去看它吗？不会，直接就扔垃圾桶了，谁会在这一堆密密麻麻的文字中寻读呢?下面将介绍如何使用css进行排版.
          增强对比
          首先,上面的标题和内容毫无对比,我们要做的就是更改标题的样式,让标题显出来,最简单的就是增加字号了.下面是加上h1,h2标签后的效果，当然你可以使用font-size来更改默认的字号大小。接着可以觉得默认的字体很难看，我们改一下字体比如我用的是微软雅黑：font-family:’Microsoft YaHei’,'微软雅黑’,Arial,’Trebuchet MS’,Verdana,Tahoma;如下图二，雅黑字体比较圆滑，看起来更加舒服。
          样式化段落
          通过上面的更改,主题已经凸显出来了,主题是”早年科比”,分为童年时期和高中时期,一目了然.但是段落是还挤在一起.我们需要一些缩进,行间距,段间距把每个段落都加上<p>标签,然后进行样式化
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
    overflow: auto;
  }
  img{
    width: 480px;
    height: 600px;
  }
  p{
    padding: 10px;
  }

</style>
