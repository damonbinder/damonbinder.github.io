(function() {
	var width = 800, height = 800; // Width and height of simulation in pixels.
	var context = $("#canvas").get(0).getContext("2d");
	var paused = false;
	context.canvas.width = width;
	context.canvas.height = height;

	function randomParticles() {
		particles = []
		for (var i = 0; i < 0; i++){
			particles.push([Math.random()*width,Math.random()*height,0.1-0.2*Math.random(),0.1-0.2*Math.random()])
		}
		return particles
	}

	function drawPoints(particles) {
		for(var i = 0; i<particles.length; i++){
			context.beginPath();
			context.arc(particles[i][0],particles[i][1],3,0,2*Math.PI);
			if (particles[i][4] == 1){
				context.fillStyle = "green";
			} else {
				context.fillStyle = "red";
			}
			context.fill();
			context.stroke();
		}
	};

	var particles = randomParticles();
	var step = 0.02;
	var drag = 0.0;
	var drift = 0;
	var central = 0.0;
	var new_point = true;

	var soft2 = 100;
	var s2 = 900;
	function ion_force(r2){
		if (r2>soft2){
			return 0.01*Math.pow(s2/r2,1.5);
		} else {
			return 0.01*Math.pow(s2/soft2,1.5);
		}
	};
	function rep_force(r2){
		if (r2>soft2){
			return 0.01*Math.pow(s2/r2,4);
		} else {
			return 0.01*Math.pow(s2/soft2,4);
		}
	};

	function mainLoop() {
		var accel_x, accel_y, new_particles, rel_force, pos_x, pos_y, vel_x, vel_y, r2;
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);
		
		$('body').on('contextmenu', '#myCanvas', function(e){ return false; });
		
		// Makes new particles
		$(document).mousedown(function (event){
			if (new_point){
				var new_x = event.pageX-canvas.offsetLeft;
				var new_y = event.pageY-canvas.offsetTop;
				if (new_x > 0 && new_y > 0 && new_x < width && new_y < height){
					if (event.button == 0){
						particles.push([event.pageX-canvas.offsetLeft,event.pageY-canvas.offsetTop,0,0,1]);
						new_point = false						
					} else {
						particles.push([event.pageX-canvas.offsetLeft,event.pageY-canvas.offsetTop,0,0,-1]);
						new_point = false
					}

				}
			}
		});

		$(document).mouseup(function (event){
			new_point = true
		});


		// Update slider-based variables.
		if ($("#drift").val() < 0){
			drift = Math.pow($("#drift").val(),1) + 1;
		} else {
			drift = Math.pow(10,$("#drift").val());
		}
		$("#driftdisplay").html(Math.round(10*drift)+"");
		if ($("#drag").val() < 0){
			drag = Math.pow($("#drag").val(),1) + 1;
		} else {
			drag = Math.pow(10,$("#drag").val());
		}
		$("#dragdisplay").html(Math.round(10*drag)+"");
		if ($("#central").val() < 0){
			central = Math.pow($("#central").val(),1) + 1;
		} else {
			central = Math.pow(10,$("#central").val());
		}
		$("#centraldisplay").html(Math.round(10*central)+"");
		speed = Math.pow(10,$("#speed").val());
		$("#speeddisplay").html(Math.round(speed)+"");


		// Run simulation step.
		if (!paused) {
			for(var iter = 0; iter < speed; iter++){
				new_particles = []
				for(var i = 0; i<particles.length; i++){
					accel_x = 0;
					accel_y = 0;
					for(var j = 0; j<particles.length; j++){
						if (j != i){
							r2 = (particles[i][0]-particles[j][0])*(particles[i][0]-particles[j][0])+(particles[i][1]-particles[j][1])*(particles[i][1]-particles[j][1])
							rel_force1 = ion_force(r2);
							rel_force2 = rep_force(r2);
							accel_x += particles[i][4]*particles[j][4]*rel_force1*(particles[i][0]-particles[j][0]) + rel_force2*(particles[i][0]-particles[j][0]);
							accel_y += particles[i][4]*particles[j][4]*rel_force1*(particles[i][1]-particles[j][1]) + rel_force2*(particles[i][1]-particles[j][1]);
						}
					}
					accel_x += -drag*particles[i][2]/10000 + drift*(2*Math.random()-1)/100 - central * (particles[i][0] - width/2)/100000;
					accel_y += -drag*particles[i][3]/10000 + drift*(2*Math.random()-1)/100 - central * (particles[i][1] - width/2)/100000;

					vel_x = particles[i][2] + step*accel_x;
					vel_y = particles[i][3] + step*accel_y;
					pos_x = particles[i][0] + step*vel_x;
					pos_y = particles[i][1] + step*vel_y;
					
					new_particles.push([pos_x,pos_y,vel_x,vel_y,particles[i][4]])
				}
				particles = new_particles
			}
		}
		debugger
		drawPoints(particles);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();