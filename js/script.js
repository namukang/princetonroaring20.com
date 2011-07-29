$(function() {
  $('#slideshow').crossSlide({
    sleep: 2,
    fade: 1
  }, [
    { src: '/files/all.jpg' },
    { src: '/files/boys.jpg' },
    { src: '/files/girls.jpg' }
  ]);
});
