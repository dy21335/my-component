function smoothScroll (elem) {

  var id
  // var gapY = 100;

  function animateScrollTo (v, direction, elem, start) {
    // v取值为1~5最好
    var lastTime = new Date().getTime()
    v = 10 * v
    function animationScroll () {
      // console.log(wrapper[0].scrollTop)
      var currentT = new Date().getTime()
      var elapsed = currentT - lastTime
      var delta = v * Math.exp(-elapsed / 325)
      delta = direction > 0 ? delta : -delta
      elem.scrollTop += delta
      if (elapsed > 1500 || Math.abs(start - elem.scrollTop) === 0) {
        cancelAnimationFrame(id)
      } else {
        id = requestAnimationFrame(animationScroll)
      }
    }
    animationScroll()
  }
  function scrollY (event) {
    //判断是否下滑到底部
    if(elem.scrollTop + elem.offsetHeight >= elem.scrollHeight && event.deltaY > 0){
      console.log('到底啦~');
    }
    event.preventDefault()
    var direction = event.deltaY > 0 ? 1 : -1
    cancelAnimationFrame(id)
    animateScrollTo(2, direction, elem, elem.scrollTop)
  }

  var bscrollY = scrollY.bind(elem)
  elem.addEventListener('wheel', bscrollY)
}
