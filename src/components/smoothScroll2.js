
function smoothScroll (elem) {
  function easeOutQuad (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  }

  function normalSpeed (v, t, a) {
    return v * t - 1 / 2 * a * t * t
  }

  var id
  function animateScrollTo (direction, elem, start) {
    var lastTime = 0
    var lastPos = 0
    // console.log('lastTime', lastTime)
    // var t = 0, vo = 30, a = 0.9；
    var t = 0, vo = 30, a = 0.9
    // 真正所需时间是t/60（因为每16毫秒调用一次）
    t = vo / a
    console.log('t', t)

    function animationScroll () {
      index++
      var vt = vo - a * lastTime
      // var delta = v * Math.exp(-elapsed / 325)
      var currentPos = normalSpeed(vo, lastTime, a)
      lastTime = lastTime + 1
      var delta = (currentPos - lastPos)
      lastPos = currentPos
      // debugger
      delta = direction > 0 ? delta : -delta
      console.log(delta)
      if (vt > 0) {
        // if(index%2==0){
        elem.scrollTop += delta
        // }
        window.requestAnimationFrame(animationScroll)
      } else {
        console.log('end')
        cancelAnimationFrame(id)
      }
    }
    // animationScroll()
    requestAnimationFrame(animationScroll)
  }

  function scrollY (vt, a, event) {
    // console.log(event.deltaY)
    event.preventDefault()
    var direction = event.deltaY > 0 ? 1 : -1
    cancelAnimationFrame(id)
    animateScrollTo(direction, elem, elem.scrollTop)
  }

  var bscrollY = scrollY.bind(elem[0], 30, 0.9)
  elem.addEventListener('mousewheel', bscrollY)
}
