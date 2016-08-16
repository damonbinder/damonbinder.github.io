(function() {

	var width = 600, height = 600; // Width and height of simulation in pixels.
	var cellSize = 2; // Size of a cell in pixels.
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

	function neighbours(x,y,grid) {
		var n = grid[x%xCellCount][(xCellCount+y-1)%yCellCount];
		n += grid[x%xCellCount][(y+1)%yCellCount];
		n += grid[(x+1)%xCellCount][y%yCellCount];
		n += grid[(xCellCount+x-1)%xCellCount][y%yCellCount];
		return n;
	}

	var grid = makeBlankGrid();
	var temperature = 4;
	var magnetism = 0;

	var paused = false

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				if (grid[y][x]) {
					context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
				}
			}
		}
	};

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		// Update slider-based variables.

		temperature = Math.pow(6, parseFloat($("#temperature").val()))-1;
		$("#tempdisplay").html(Math.round(1000*temperature)/1000+"");
		magnetism = parseFloat($("#magnetism").val());
		$("#magdisplay").html(magnetism+"");

		// Run simulation step.

		if (!paused) {
			var x0, y0, state;
			var bolt = []
			for (var i = 0; i < 10; i++) {
				bolt.push(Math.exp(-4*Math.abs(i+magnetism-2)/temperature));
			}
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					x0 = randcell();
					y0 = randcell();
					state = neighbours(x0, y0, grid) - 2;
					if (state + magnetism<0.01 && grid[x0][y0]>0){
						grid[x0][y0] = 0;
					} else if (state + magnetism>-0.01 && grid[x0][y0]<1){
						grid[x0][y0] = 1;
					} else if (Math.random() < bolt[state+2]){
						grid[x0][y0] = 1 - grid[x0][y0];
					}
				}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();