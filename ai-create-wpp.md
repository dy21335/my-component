## ai-creat-app项目结构讲解

本文目录为：

1. 运行环境；

2. 项目结构；

3. 主要文件的讲解；

4. 代码编写注意事项；

5. 整个项目运行流程。

<br>

## 1. 运行环境

1.1&ensp; 不同于传统的开发环境，我们的项目是属于混合开发模式；

1.2&ensp; 客户端有两种内嵌的浏览器框架：

&emsp;  1.2.1&ensp; 一种是`qt webkit`内核；

​	如下页面和控制台（ctrl + F8）就是基于`qt webkit`内核：

<img src="http://ww1.sinaimg.cn/large/ec07bbd2gy1fsgr5zfh83j20li0ihagq.jpg" width="700px" />
<br>

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fsgrlczg0aj20af0dqjts.jpg)

<br>

&emsp;  1.2.2&ensp; 另一种是`cef`，基于Google Chromium的Webbrowser控件。

​	如下两图所示，智能排版页面就是基于`cef`内核实现的，它的控制台也有所不同:

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fsgr9m7gjsj20cb0giwhw.jpg)
<br>

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fsgre5k3erj20nm0batb8.jpg)

<br>

1.3&ensp; 项目中通信主要分为以下**四种**：

&emsp;  1.3.1&ensp; 前端与客户端通信，类似jsonP形式：前端实现与客户端约定好的全局回调方法，传递指令给客户端，客户端调用此方法；

&emsp;  1.3.2&ensp; 前端实现一个全局回调方法，客户端可随时调用此方法；

&emsp;  1.3.3&ensp; 在某种特定情况下，客户端会触发广播事件，不同前端项目需要响应此广播指令，在window上定义相应的回调函数；

&emsp;  1.3.4&ensp; 前端与服务端通信：由于项目存放在本地，ajax无效，通过客户端作为代理，向服务端发送请求。

&emsp;  &emsp;  <1>&ensp; 常规的ajax向服务端请求数据的协议是 http://，由于运行的为本地文件，所以协议头为file://，产生了跨域不可用，解决办法是由客户端提供专用网络请求接口 httpGet/httpPost；

&emsp;  &emsp;  <2>&ensp; 通过抓包工具查看客户端向服务端发起的请求；

&emsp;  &emsp;  <3>&ensp; 以智能排版为例，智能排版的缩略图就是向服务端请求的数据，如下图：

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fshel4ub9pj20hr0fugqk.jpg)

<br>

1.4&ensp; 服务端接口返回的格式通常如下，特殊情况会有所不一样：

> result： http状态;
>
> data： 数据;
>
>  msg： 附加信息 ;

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fshh6ezaqaj20i2085dfs.jpg)

参考链接：http://cloud-doc.wps.cn/account/

<br>

## 2. 项目结构

**以ai-create-wpp项目为例:**

> Vue版本号：2.9.6
>
> Node版本号： 10.3.0
>
>  npm版本号：6.1.0



```
|-- build				//项目构建（webpack）相关代码
|	|-- build.js				//生产环境构建代码
|	|-- check-versions.js			//检查node、npm等版本
|	|-- utils.js				//构建工具相关
|	|-- vue-loader.conf.js			//vue单文件所用的配置			
|	|-- webpack.base.conf.js		//webpack的通用配置文件
|	|-- webpack.dev.conf.js			//webpack开发环境配置
|	|-- webpack.prod.conf.js		//webpack生产环境配置
|
|-- config				//vue项目相关配置，设置监听端口，打包输出路径等
|	|-- dev.env.js				//开发环境配置
|	|-- index.js				//开发与生产环境下的项目的一些配置
|	|-- prod.env.js				//生产环境配置
|	|-- test.env.js					//测试环境配置
|
|-- node_moudules		//依赖包
|
|-- src 					//核心项目文件
|	|-- api					//工具方法				
|	|	|-- server					//基于httpBridge.js的封装
|	|	|	|-- index.js
|	|	|-- base64.js				//用于双端通信时数据的编码和解码
|	|	|-- bridge.js				//信号桥，导出jsAsynCall方法，可以通过js调用wps客户端API
|	|	|-- commonApi.js			//公共、基本的js to wps、wps to js的api
|	|	|-- commonInfoCollectApi.js  //信息收集
|	|	|-- conf.js				//软编码配置，定义回调件名等
|	|	|-- devQtPolyfill.js		//qt环境下一些方法实现
|	|	|-- documentInit.js		//屏蔽一些功能
|	|	|-- frameAnim.js			//基于Canvas的帧动画库
|	|	|-- httpBridge.js			//封装客户端的http get和post方法，用于前端发送服务端请求
|	|	|-- infoCollect.js			//信息收集函数
|	|	|-- observe.js			//基于Vue实例创建观察者模式 $emit/$on
|	|	|-- utils.js				//工具类函数
|	|	|-- wpsApi.js				//ai美化的api
|	|-- assets				//静态资源
|	|-- components				//vue公共组件
|	|	|-- standardTemplate.vue			
|	|-- config				//项目开发环境配置
|	|	|-- alias.js				//定义webpack重命名配置
|	|	|-- custom.js				//定义页面文案、gif等可配置内容
|	|	|-- index.js				//AI的生命周期变量和url请求地址变量
|	|-- page					//vue页面
|	|	|-- aippt.vue				//总的AI项目页面
|	|	|-- networkerr.vue		//网络错误页面
|	|-- plugins				//插件
|	|	|-- infoCollect.js		//将api/infoCollect对象绑定到Vue实例上
|	|	|-- wpsApi.js			//将api/wpsApi对象绑定到Vue实例上
|	|-- router				//路由
|	|	|-- index.js				//路由配置
|	|-- store					//vuex的store
|	|	|-- modules
|	|	|	|-- base.js
|	|	|	|-- user.js
|	|-- App.vue				//页面入口文件；
|	|-- main.js				// 程序入口文件，加载各种公共组件，插件
|
|-- static 					//静态资源
|	|-- api
|	|-- assets
|	|-- components
|	|-- config
|	|-- page
|
|-- test 						//测试
|	|-- api
|	|-- assets
|
|-- .babelrc				//Babel解释器的配置文件 
|-- .editorconfig	  //该文件定义项目的编码规范 
|-- .eslintignore		//eslint需要忽略的文件
|-- .eslintrc.js
|-- .gitignore					//git仓库同步时需要忽略提交的文件
|-- .postcssrc.js
|-- index.html
|-- package.json				//用于记录和管理npm包的依赖和版本号
|-- package-lock.json		
|-- README.md
|-- rename.bat
|-- yarn.lock
```

<br>

## 3. 主要文件的讲解

> 以下解析是挑取项目中的重要文件进行的讲解；
>
> 其中最重要的部分是bridge.js。

### 3.1 api文件

+ base64.js
  + 用于兼容cef和qt框架上编码的解码方法。

+ **bridge.js**

  + bridge.js是前端与客户端沟通的通信桥；

  + 在基于wps客户端进行的混合开发模式下，前端与客户端的沟通类似于JSONP的方式，前端与客户端约定好一个回调方法，传递信息给客户端，客户端返回一个约定好的回调函数名和参数；

  + 如下代码块就是传递信息给客户端的核心实现：

    ```JavaScript
    const _jsAsynCall = (window.external && window.external.jsAsynCall) || function () {}
    const _cefQuery = window.cefQuery
    ...
    //判断是为qt还是cef框架，调用相应的方法；
        if (_cefQuery) {
          _cefQuery({
            request: `jsAsynCall("${jsonIn}")`,
            persistent: false
          })
        } else {
          _jsAsynCall(jsonIn)
        }
      })
      return promise
    }
    ```

  + 因为C++和JS数据格式不互通，所以我们用传递字符串的方式来传递信息，并且方便解码和编码；

  + 如下代码块所示，是封装信息的过程 ：

    ```javascript
    //这个文件可以通过args向客户端传递信息；客户端也可以通过回调函数向前端传递信息
    const jsAsynCall = (methodName, args, resultFilter, callback) => {
      let promise = new Promise((resolve, reject) => {
          //回调函数名
        let callbackName = methodName + '_async_callback_' + ++jsAsynCallCount
        //把信息封装，传给客户端
        let invokeParams = {...//方法名，参数，回调函数名}
        let listenCallbackName = callbackName
        //回调函数
        window[listenCallbackName] = (res) => {	... }
    	//编码
        let jsonIn = Base64.encode(JSON.stringify(invokeParams))
        //传给客户端
        if (_cefQuery) {... }
      return promise
    }
    export default {
      jsAsynCall
    }
    ```

    

+ **commonApi.js**

  + `setWindowCallBack`方法是用于让客户端能够主动调用前端的方法；
  + 客户端主动发送一个指令，前端监听到这个指令，触发回调，如下代码块所示：

  ```javascript
  
  const Api = {
  
    //设置全局回调函数,由客户端主动调用,参数由客户端提供
    setWindowCallBack (methodName, cb) {
      window[methodName] = result => {...}
    },
  //登录
    login (loginSrc) { ... },
  //检查用户状态，登录状态切换，其他项目升级会员后权限变化
    checkUserLogin () { ... },
  //用户状态改变
    userStateChanged (fn) {
      this.setWindowCallBack('userStateChanged', (res) => { ... },
  //在浏览器中打开网页
    showBrowser (url, autoLogin) {...},
  
   // 打开新应用程序窗口, 载入对应网页
    openNewWindow (url, transferData, width, height, bModal, closeBtn) { ... },
  
  // HTTP的GET方法请求
  
    httpGet (params, header) { ... },
  
   // HTTP的POST方法请求
    httpPost (params, header) {},
  ...
  
  export default Api
  ```

+ **httpBridge.js**

  + 这个文件提供了与服务器通信会调用的方法；

  + 如下代码块的get和post方法都需要借助于客户端的httpget和httppost方法：

    ```javascript
    /**
     * 必须借助客户端httpPost或者httpGet进行服务端通信交互，构建后代码运行协议是file:///; 常规web端 ajax, websocket等前端通信接口受同源策略限制将失效。20180519 - BruceZ
     */
    //错误类型
    let ErrorType = {...}
    //默认请求头
    let DefaultHeader = {...}
    
    class DataService {
      constructor () { ...//请求头本信息的设置 }
    ...
    //拼接完整请求地址
      combineURLs (baseURL, relativeURL) { ... }
      //get方法
      get (relativeURL, { params = {}, currentHeaderParams = {} } = {}) {
        return this.callbackFilter(CommonApi.httpGet({ ... }))
      }
    //post方法
      post (relativeURL, data = {}, currentHeaderParams = {}) {
    
        return this.callbackFilter(CommonApi.httpPost({...}))
      }
                                          
      callbackFilter (promise) {
        return new Promise((resolve, reject) => {
          // 客户端中的 httpGet，httpPost请求成功或者失败都会进入 Bridge.resolve，需要二次处理
          promise.then(res => {...}) })}}
    
    export default new DataService()
    ```

+ **wpsApi.js**

  + 提供文档美化相关API。

<br>

### 3.2 page文件

+ aippt.vue

  ```javascript
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
      ...
  </style>
  <template>
   	...
  </template>
  <script>
  /* eslint-disable */
  import Observe from 'Observe'
  import FrameAnim from '@/api/frameAnim'
  import { LIFECYCLE } from '@/config/'
  import { Docer } from 'Server'
  import { ImgPreload } from 'Utils'
  export default {
      ...
    async mounted () {
      // 通知客户端：Vue页面已挂载，白屏结束，可以调起AI窗口
      this.$WpsApi.webLoadFinish()
     //通知服务器拿到职业类型和风格图片
      await this.getOccupationType()
      await this.getStyleImgs()
      //检查网络
      if (!this.networkOK) {
        return
      }
  	
      this.$WpsApi.getAiReady().then((res) => {
        this.aiFramesReady = !!res || false
      })
  	//设置监听
      this.setListener()
  	//准备动画
      this.prepareAnimResource()
  	//启动AI
      this.AIStart()
    }，
    ...
  }
  </script>
  ```

<br>

## 4. 代码编写注意事项

4.1&ensp; 符合[eslint编码规范](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)；

4.2&ensp; 注意模块化，保证每个模块都是一个独立的单元，不要暴露模块内部方法（通常以_开头）；

4.3&ensp; 使用ES6语法；

4.4&ensp; 注意软编码，不要写死配置，以灵活应对需求变动。

<br>

## 5. 整个项目运行流程

5.1&ensp; ai-create-wpp项目的运行请查看该项目readme文档；
