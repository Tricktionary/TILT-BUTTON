 $(document).ready(function(){
 	var tilt = new Howl({
  		src: ['tilt.mp3']
	});
	$("#tilt").click(killMe);

	function killMe(){
		tilt.play();

		window.setInterval(function(){
			$("html").css('background-color',randomColor);
			$("#tilt").css('color',randomColor);
		},150);
		AnimateRotate(360);
		$("#tilt").unbind('click',killMe);	//Take off the click listeners

	}

});

 function AnimateRotate(angle) {
	// caching the object for performance reasons
	var $elem = $('#tilt');

	// we use a pseudo object for the animation
	// (starts from `0` to `angle`), you can name it as you want
	$({deg: 0}).animate({deg: angle}, {
		duration: 300,
		step: function(now) {
			// in the step-callback (that is fired each step of the animation),
			// you can use the `now` paramter which contains the current
			// animation-position (`0` up to `angle`)
			$elem.css({
				transform: 'rotate(' + now + 'deg)'
			});
		},
		complete: function(){
			AnimateRotate(360);
		}
	},'linear');
}