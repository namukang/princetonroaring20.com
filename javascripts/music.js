$(document).ready(function() {
  // Toggle display of audio tags
  $("a").click(function(event) {
    var audio = $(this).nextAll("audio");
    if (audio.length > 0) {
      event.preventDefault();
      audio.toggle();
    }
  });
});

