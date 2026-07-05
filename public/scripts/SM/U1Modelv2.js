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
				theta =  Math.random();
				grid[i][j] = [Math.cos(2*Math.PI*theta),Math.sin(2*Math.PI*theta),theta];
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n0 = (grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[0];
		n0    += (grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[0];
		n0    += (grid[x%xCellCount][(y+1)%yCellCount])[0];
		n0    += (grid[(x+1)%xCellCount][y%yCellCount])[0];
		
		var n1 = (grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[1];
		n1    += (grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[1];
		n1    += (grid[x%xCellCount][(y+1)%yCellCount])[1];
		n1    += (grid[(x+1)%xCellCount][y%yCellCount])[1];
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
				val_to_deg = Math.round((grid[x][y])[2]*360);
				context.fillStyle = "hsl("+val_to_deg+", 80%, 50%)";
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
			var x0, y0, n, state, deltaU, new_value, new_0, new_1, theta;
			var bolt = []
			for (var i = 0; i < 10; i++) {
				bolt.push(Math.exp(-4*Math.abs(i+magnetism-2)/temperature));
			}
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					x0 = randcell();
					y0 = randcell();

					state = grid[x0][y0];

					theta =  state[2]+0.2*Math.random()-0.1;
					new_0 = Math.cos(2*Math.PI*theta);
					new_1 = Math.sin(2*Math.PI*theta);

					n = neighbours(x0,y0,grid);
					deltaU = -((n[0]+magnetism)*(new_0-state[0])+n[1]*(new_1-state[1]))/(0.25*temperature);
					debugger
					if (deltaU<0.0 || Math.random()<Math.exp(-deltaU)){
						grid[x0][y0] = [new_0,new_1,theta];
					}
				}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();