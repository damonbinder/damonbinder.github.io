(function() {

	var width = 462, height = 462; // Width and height of simulation in pixels.
	var cellSize = 3; // Size of a cell in pixels.
	var yCellCount = Math.floor(height/cellSize); // Number of cells in the up-down direction.
	var xCellCount = Math.floor(width/cellSize); // Number of cells in the left-right direction.

	function randcell() {
		return Math.floor(Math.random()*xCellCount);
	}


	var context = $("#canvas").get(0).getContext("2d");

	context.canvas.width = width;
	context.canvas.height = height;

	function makeBlankGrid() {
		// First, we make a new array of rows. Then we set those rows.
		var grid = new Array(yCellCount);
		for (var i = 0; i < yCellCount; i++) {
			grid[i] = new Array(xCellCount);
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = 0;
			}
		}
		return grid;
	};

	function up_down(x,y,grid) {
		var n = grid[x%xCellCount][(xCellCount+y-1)%yCellCount] + grid[x%xCellCount][(y+1)%yCellCount];
		return n;
	}

	var displacement = makeBlankGrid();

	var velocity = makeBlankGrid();
	var rho = 1;
	var speed = 1;
	var dissipation = 0;
	var spring = 0;
	var h = 0.5;
	var new_point = true;

	var paused = false;

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				color = Math.max(0,Math.min(255,Math.round(255*(grid[x][y]/4+1/2))));
				context.fillStyle = "rgb("+color+","+color+","+color+")";
				context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
			}
		}
	};

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		// Makes new wave
		$(document).mousedown(function (event){
			if (new_point){
				var new_x = Math.round((event.pageX-canvas.offsetLeft)/cellSize);
				var new_y = Math.round((event.pageY-canvas.offsetTop)/cellSize);
				if (new_x > 0 && new_y > 0 && new_x < xCellCount && new_y < yCellCount){
					for (var y = 1; y+1 < yCellCount; y++) {
						for (var x = 1; x+1 < xCellCount; x++) {
							displacement[x][y] += 4*Math.exp(-(x-new_x)*(x-new_x)*0.25-(y-new_y)*(y-new_y)*0.25)
						}
					}
				}
			}
		});

		$(document).mouseup(function (event){
			new_point = true
		});


		// Update slider-based variables.
		speed = Math.pow(10,parseFloat($("#speed").val()));
		$("#speeddisplay").html(Math.round(speed*100)/100+"");
		
		dissipation = parseFloat($("#dissipation").val());
		$("#disdisplay").html(dissipation+"");

		spring = parseFloat($("#spring").val());
		$("#springdisplay").html(spring+"");

		// Run simulation step.
		if (!paused) {
			var left, mid;
			var new_displacement = makeBlankGrid();
			var new_velocity = makeBlankGrid();
			var h = 0.7*speed;
			for (var y = 1; y+1 < yCellCount; y++) {
				left = displacement[0][y];
				mid  = displacement[1][y];
				for (var x = 1; x+1 < xCellCount; x++) {
					right = displacement[x+1][y];
					new_velocity[x][y] = -0.01*h*spring*displacement[x][y]+(1 - 0.04*dissipation)*velocity[x][y] + h*(up_down(x,y,displacement)+left+right-4*displacement[x][y])*rho;
					new_displacement[x][y] = displacement[x][y] + h*new_velocity[x][y];
					left = mid;
					mid  = right;
				}
			}
			displacement = new_displacement;
			velocity = new_velocity;
		}

		drawGrid(displacement);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();