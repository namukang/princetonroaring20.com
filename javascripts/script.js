$(function() {
  $('#slideshow').crossSlide({
    sleep: 2,
    fade: 1
  }, [
    { src: '/images/p1.jpg' },
    { src: '/images/p2.jpg' },
    { src: '/images/p3.jpg' },
    { src: '/images/p4.jpg' },
    { src: '/images/p5.jpg' },
    { src: '/images/p6.jpg' }
  ]);
});
