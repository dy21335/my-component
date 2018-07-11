function smoothScroll (elem) {
  var id
  // var gapY = 100;

  function animateScrollTo (v, direction, elem, start) {
    //v取值为1~5最好
    var lastTime = new Date()
    v = 10 * v
    function animationScroll () {
      // console.log(wrapper[0].scrollTop)
      var currentT = new Date()
      var elapsed = currentT - lastTime
      var delta = v * Math.exp(-elapsed / 325)
      delta = direction > 0 ? delta : -delta
      // debugger
      elem.scrollTop += delta
      if (elapsed > 1500 || Math.abs(start - elem.scrollTop) === 0) {
        console.log('end')
        cancelAnimationFrame(id)
      } else {
        id = requestAnimationFrame(animationScroll)
      }
    }
    animationScroll()
  }
  function scrollY (event) {
    // console.log(event.deltaY)
    event.preventDefault()
    var direction = event.deltaY > 0 ? 1 : -1
    cancelAnimationFrame(id)
    animateScrollTo(2, direction, elem, elem.scrollTop)
  }
  var bscrollY = scrollY.bind(elem[0])
  elem.addEventListener('mousewheel', bscrollY)
}
