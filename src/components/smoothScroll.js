function smoothScroll (elem) {
  var id
  var timerId
  var velocity = 0
  var lastVelocity
  var lastTime = 0
  var currentTime = 0
  // var gapY = 100;

  function animateScrollTo (v, direction, elem, start) {
    var index = 0
    // v取值为1~5最好
    var lastTime = new Date().getTime()
    v = 10 * v
    function animationScroll () {
      index++
      // console.log(wrapper[0].scrollTop)
      var currentT = new Date().getTime()
      var elapsed = currentT - lastTime
      var delta = v * Math.exp(-elapsed / 325)
      delta = direction > 0 ? delta : -delta
      elem.scrollTop += delta
      if (elapsed > 1500 || Math.abs(start - elem.scrollTop) === 0) {
        console.log('index', index)
        cancelAnimationFrame(id)
      } else {
        id = requestAnimationFrame(animationScroll)
      }
    }
    animationScroll()
  }
  function scrollY (event) {
    currentTime = new Date().getTime()
    event.preventDefault()
    if (velocity === 0) {
      timerId = window.setTimeout(() => {
        lastTime = new Date().getTime()
        // window.clearTimeout(timerId)
        console.log('v', velocity)
        event.preventDefault()
        var direction = event.deltaY > 0 ? 1 : -1
        cancelAnimationFrame(id)
        animateScrollTo(velocity, direction, elem, elem.scrollTop)
        lastVelocity = velocity
        velocity = 0
      }, 100)
    }
    velocity++
    // event.preventDefault()
    // var direction = event.deltaY > 0 ? 1 : -1
    // cancelAnimationFrame(id)
    // animateScrollTo(2, direction, elem, elem.scrollTop)
  }

  var bscrollY = scrollY.bind(elem)
  elem.addEventListener('wheel', bscrollY)
}
