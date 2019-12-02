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

	var grid = makeBlankGrid();
	var diffusion = 2
	var mouse_x = -1;
	var mouse_y = -1;

	var paused = false

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				val = grid[x][y]
				if (val<1) {
					val = Math.pow(0.5-0.5*Math.cos(grid[x][y]*Math.PI),0.15);
				} else{
					val = 1;
				}
				
				color = Math.round(240-240*val);
				context.fillStyle = "hsl("+color+",100%,50%)";
				context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
			}
		}
	};

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		$(document).mousemove(function (event){
			mouse_x = Math.round((event.pageX-canvas.offsetLeft)/cellSize);
			mouse_y = Math.round((event.pageY-canvas.offsetTop)/cellSize);
		});

		// Update slider-based variables.
		diffusion = 2*parseFloat($("#magnetism").val());
		$("#magdisplay").html(diffusion+"");

		// Run simulation step.
		if (!paused) {
			if (mouse_x > 0 && mouse_y > 0 && mouse_x < width/cellSize && mouse_y < height/cellSize){
				grid[mouse_x][mouse_y] += 0.5;

			}
			var left, mid;
			var new_grid = makeBlankGrid();
			for (var y = 1; y+1 < yCellCount; y++) {
				left = grid[0][y];
				mid  = grid[1][y];
				for (var x = 1; x+1 < xCellCount; x++) {
					right = grid[x+1][y]
					new_grid[x][y] = ((up_down(x,y,grid)+left+right)*diffusion+mid*400)/(400+4*diffusion);
					left = mid;
					mid  = right;
				}
			}
			grid = new_grid;
		}


		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();