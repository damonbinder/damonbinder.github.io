(function() {
	var width = 500, height = 500; // Width and height of simulation in pixels.
	var context = $("#canvas").get(0).getContext("2d");
	var paused = false;
	context.canvas.width = width;
	context.canvas.height = height;

	r_s = 20 // =3 miilion km for supermassive black hole ~ 1 million solar masses
	l = 2*r_s

	function force(r){
		return -r_s/(r*r)+2*l*l/(r*r*r)-3*(l*l)*r_s/(r*r*r*r)
	}

	function factor(r){
		return 1-r_s/r
	}

	function drawPoints(rocket) {
		context.beginPath();
		context.arc(250,250,r_s,0,2*Math.PI);
		context.strokeStyle = "white";
		context.stroke();

		context.beginPath();
		rocket_x = 250+rocket[0]*Math.cos(rocket[1]);
		rocket_y = 250+rocket[0]*Math.sin(rocket[1]);
		context.arc(rocket_x,rocket_y,3,0,2*Math.PI);
		context.fillStyle = "white";
		context.fill();
		context.stroke();
	};

	var rocket = [200,0,0,0];
	var step = 0.005;
	var step_num = 1000

	var accel_strength = 0.05
	
	var accel_y = 0
	var accel_x = 0

	var up_change = true
	var down_change = true
	var left_change = true
	var right_change = true

	var un_time = 0
	var your_time = 0

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		$(document).keydown(function (event){
			if (event.keyCode == 38 && up_change){
				accel_y += -accel_strength;
				up_change = false
			};
			if (event.keyCode == 40 && down_change){
				accel_y += accel_strength; 
				down_change = false
			};
			if (event.keyCode == 39 && right_change){
				accel_x += accel_strength; 
				right_change = false
			};
			if (event.keyCode == 37 && left_change){
				accel_x += -accel_strength; 
				left_change = false
			};
		});

		$(document).keyup(function (event){
			if (event.keyCode == 38 && !up_change){
				accel_y += accel_strength; 
				up_change = true
			};
			if (event.keyCode == 40 && !down_change){
				accel_y += -accel_strength;
				down_change = true
			};
			if (event.keyCode == 39 && !right_change){
				accel_x += -accel_strength;
				right_change = true
			};
			if (event.keyCode == 37 && !left_change){
				accel_x += accel_strength;
				left_change =true
			};
		});

		// Run simulation step.
		if (!paused) {
			for (var i = 0; i<step_num; i++){
				l = l+step*(accel_y*Math.cos(rocket[1])-accel_x*Math.sin(rocket[1]))
				vel_theta = l/(rocket[0]*rocket[0]);
				rocket[1] += vel_theta*step

				accel_radius = force(rocket[0])+step*(accel_y*Math.sin(rocket[1])+accel_x*Math.cos(rocket[1]))
				rocket[2] += step*accel_radius
				rocket[0] += step*rocket[2]

				un_time += Math.sqrt((1+rocket[2]*rocket[2]/factor(rocket[0])+vel_theta*vel_theta*rocket[0]*rocket[0])/factor(rocket[0]))
				your_time += 1
			}

			if (rocket[0]<1){
				paused = true;
				rocket[0] = 0;
			}
		}
		drawPoints(rocket);

		if (!paused){
			$("#un_time").html(Math.round(un_time*step*15/(60*60))+" hours");
		}
		else {
			$("#un_time").html("Infinite");
		}
		$("#your_time").html(Math.round(your_time*step*15/(60*60))+" hours");

		//if (!paused){
		//	$("#un_time").html(Math.round(un_time/step_num*0.1,2)+"");
		//}
		//else {
		//	$("#un_time").html("Infinite");
		//}
		//$("#your_time").html(Math.round(your_time/step_num*0.1,2)+"");

		setTimeout(mainLoop, 1); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();