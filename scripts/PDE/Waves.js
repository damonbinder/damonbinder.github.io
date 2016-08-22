(function() {

	var width = 500, height = 500; // Width and height of simulation in pixels.
	var cellSize = 5; // Size of a cell in pixels.
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
	//for (var y = 1; y+1 < yCellCount; y++) {
	//	for (var x = 1; x+1 < xCellCount; x++) {
	//		displacement[x][y] = Math.pow(Math.sin(x/xCellCount*Math.PI),10)*Math.pow(Math.sin(y/yCellCount*Math.PI),10);
	//	}
	//}
	var velocity = makeBlankGrid();
	var rho = 1;
	var speed = 1;
	var dissipation = 0;
	var oscillation = 1;
	var mouse_x = -1;
	var mouse_y = -1;
	var h = 0.5;
	var time = 0;

	var paused = false

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

		// Update slider-based variables.
		speed = Math.pow(10,parseFloat($("#speed").val()));
		$("#speeddisplay").html(Math.round(speed*100)/100+"");
		dissipation = parseFloat($("#dissipation").val());
		$("#disdisplay").html(dissipation+"");
		oscillation = Math.pow(10,parseFloat($("#oscillation").val()));
		$("#oscdisplay").html(Math.round(oscillation*100)/100+"");

		// Run simulation step.
		if (!paused) {
			if (mouse_x > 0 && mouse_y > 0 && mouse_x < width/cellSize && mouse_y < height/cellSize){
				displacement[mouse_x][mouse_y] += 0.01;

			}
			var left, mid;
			var new_displacement = makeBlankGrid();
			var new_velocity = makeBlankGrid();
			var h = 0.5*speed;
			for (var y = 1; y+1 < yCellCount; y++) {
				left = displacement[0][y];
				mid  = displacement[1][y];
				for (var x = 1; x+1 < xCellCount; x++) {
					right = displacement[x+1][y];
					new_velocity[x][y] = (1 - 0.04*dissipation)*velocity[x][y] + h*(up_down(x,y,displacement)+left+right-4*displacement[x][y])*rho;
					new_displacement[x][y] = displacement[x][y] + h*new_velocity[x][y];
					left = mid;
					mid  = right;
				}
			}
			displacement = new_displacement;
			velocity = new_velocity;
			time += 0.1*speed;
			for (var y = 0; y < yCellCount; y++) {
				displacement[0][y]            = Math.sin(oscillation*time);
				displacement[xCellCount-1][y] = Math.sin(oscillation*time);
				displacement[y][0]            = Math.sin(oscillation*time);
				displacement[y][yCellCount-1] = Math.sin(oscillation*time);
			}
		}

		drawGrid(displacement);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();