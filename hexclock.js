window.onload = function() {

	//Save the hexclock div and body

	var hexclockDiv = document.querySelector('.hexclock');
	var body = document.querySelector('body');

	//Create the Timer function which changes the hexclockDiv to the current hour, also set an interval of 1 second (1000 miliseconds)

	function Timer() {

		var date = new Date();
		var time = date.toLocaleTimeString();
		var split = time.split(":");
		var inner = "#" + split[0] + split[1] + split[2];
		hexclockDiv.innerHTML = time;
		body.style.background = inner;
		
	}

	var interval = setInterval(Timer, 1000);

}