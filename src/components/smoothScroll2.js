function smoothScroll (elem) {
  function easeOutQuad(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  }

  function normalSpeed(v, t, a) {
    return v*t - 1/2*a*t*t
  }

  var id
  // var gapY = 100;

  // function animateScrollTo (direction, elem, start) {
  //   var lastTime = 0
  //   var lastPos = 0
  //   var index = 0
  //   // console.log('lastTime', lastTime)
  //   var t = 0, v = 60, a = 0.1;
  //   t = v/a
  //   console.log('t',t)
  //
  //   function animationScroll () {
  //     index++
  //     v = 60 - a * lastTime
  //     // var delta = v * Math.exp(-elapsed / 325)
  //     var currentPos = normalSpeed(60, lastTime, a)
  //     lastTime = lastTime+1
  //     var delta = (currentPos - lastPos)*0.03
  //     lastPos = currentPos
  //     // debugger
  //     delta = direction > 0 ? delta : -delta
  //     console.log(delta)
  //     if ( v > 0 ){
  //       // if(index%2==0){
  //         elem.scrollTop += delta
  //       // }
  //       window.requestAnimationFrame(animationScroll)
  //     } else {
  //       console.log('end')
  //       cancelAnimationFrame(id)
  //     }
  //   }
  //   // animationScroll()
  //   requestAnimationFrame(animationScroll)
  // }
  function animateScrollTo (direction, elem, start) {
    var lastTime = 0
    var lastPos = 0
    var index = 0
    // console.log('lastTime', lastTime)
    var t = 0, v = 60, a = 0.1;
    t = v/a
    console.log('t',t)

    function animationScroll () {
      index++
      v = 60 - a * lastTime
      // var delta = v * Math.exp(-elapsed / 325)
      var currentPos = normalSpeed(60, lastTime, a)
      lastTime = lastTime+1
      var delta = (currentPos - lastPos)*0.03
      lastPos = currentPos
      // debugger
      delta = direction > 0 ? delta : -delta
      console.log(delta)
      if ( v > 0 ){
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

  function scrollY (event) {
    // console.log(event.deltaY)
    event.preventDefault()
    var direction = event.deltaY > 0 ? 1 : -1
    cancelAnimationFrame(id)
    animateScrollTo(direction, elem, elem.scrollTop)
  }

  var bscrollY = scrollY.bind(elem[0])
  elem.addEventListener('mousewheel', bscrollY)
}
