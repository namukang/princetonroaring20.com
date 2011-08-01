$(function() {
  $('#slideshow').crossSlide({
    sleep: 2,
    fade: 1
  }, [
    { src: '/images/slideshow/p1.jpg' },
    { src: '/images/slideshow/p2.jpg' },
    { src: '/images/slideshow/p3.jpg' },
    { src: '/images/slideshow/p4.jpg' },
    { src: '/images/slideshow/p5.jpg' },
    { src: '/images/slideshow/p6.jpg' }
  ]);
});
