(function() {

	var width = 600, height = 600; // Width and height of simulation in pixels.
	var cellSize = 6; // Size of a cell in pixels.
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
				grid[i][j] = Math.random();
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n0 = Math.cos(2*Math.PI*grid[x%xCellCount][(xCellCount+y-1)%yCellCount]);
		n0    += Math.cos(2*Math.PI*grid[x%xCellCount][(y+1)%yCellCount]);
		n0    += Math.cos(2*Math.PI*grid[(x+1)%xCellCount][y%yCellCount]);
		n0    += Math.cos(2*Math.PI*grid[(xCellCount+x-1)%xCellCount][y%yCellCount]);

		var n1 = Math.sin(2*Math.PI*grid[x%xCellCount][(xCellCount+y-1)%yCellCount]);
		n1    += Math.sin(2*Math.PI*grid[x%xCellCount][(y+1)%yCellCount]);
		n1    += Math.sin(2*Math.PI*grid[(x+1)%xCellCount][y%yCellCount]);
		n1    += Math.sin(2*Math.PI*grid[(xCellCount+x-1)%xCellCount][y%yCellCount]);
		return [n0,n1];
	}

	var grid = makeBlankGrid();
	var temperature = 4;
	var magnetism = 0;

	var paused = false

	function drawGrid(grid) {
		var val_to_deg
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				val_to_deg = Math.round(grid[x][y]*360);
				context.fillStyle = "hsl("+val_to_deg+", 80%, 50%)";
				debugger
				context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
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
			var x0, y0, n, state, deltaU, new_value;
			var bolt = []
			for (var i = 0; i < 10; i++) {
				bolt.push(Math.exp(-4*Math.abs(i+magnetism-2)/temperature));
			}
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					x0 = randcell();
					y0 = randcell();

					state = grid[x0][y0];
					new_value = state+0.2*Math.random()-0.1;
					n = neighbours(x0,y0,grid);
					
					deltaU = -((n[0]+magnetism)*(Math.cos(2*Math.PI*new_value)-Math.cos(2*Math.PI*state))+n[1]*(Math.sin(2*Math.PI*new_value)-Math.sin(2*Math.PI*state)))/(0.25*temperature);
					if (deltaU<0.0 || Math.random()<Math.exp(-deltaU)){
						grid[x0][y0] = new_value;
					}
				}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();