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
				theta = 2*Math.PI*Math.random();
				phi = Math.acos(1-2*Math.random());
				grid[i][j] = [Math.cos(phi),Math.sin(phi)*Math.sin(theta),Math.sin(phi)*Math.cos(theta),theta];
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var neigh1  = grid[x%xCellCount][(xCellCount+y-1)%yCellCount];
		var neigh2  = grid[(xCellCount+x-1)%xCellCount][y%yCellCount];
		var neigh3  = grid[x%xCellCount][(y+1)%yCellCount];
		var neigh4  = grid[(x+1)%xCellCount][y%yCellCount];

		var n0 = neigh1[0]+neigh2[0]+neigh3[0]+neigh4[0];
		var n1 = neigh1[1]+neigh2[1]+neigh3[1]+neigh4[1];
		var n2 = neigh1[2]+neigh2[2]+neigh3[2]+neigh4[2];
		return [n0,n1,n2];
	}

	var grid = makeBlankGrid();
	var temperature = 4;
	var magnetism = 0;

	var paused = false

	function drawGrid(grid) {
		var val_to_deg, azimuthal;
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				val_to_deg = Math.round((grid[x][y])[3]*360/(Math.PI*2)); // Math.round(x*360/xCellCount); \\
				azimuthal  = Math.round(50*(grid[x][y])[0]+50);// Math.round(50*Math.cos(y*Math.PI/xCellCount)+50); \\
				context.fillStyle = "hsl("+val_to_deg+", 100%, "+azimuthal+"%)";
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
			var x0, y0, new_0, new_1, new_2, n, state, deltaU, new_value, theta, phi;
			var bolt = []
			for (var i = 0; i < 10; i++) {
				bolt.push(Math.exp(-4*Math.abs(i+magnetism-2)/temperature));
			}
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					x0 = randcell();
					y0 = randcell();

					state = grid[x0][y0];
					theta = 2*Math.PI*Math.random();
					phi   = Math.acos(1-2*Math.random());
					new_0 = Math.cos(phi);
					new_1 = Math.sin(phi)*Math.sin(theta);
					new_2 = Math.sin(phi)*Math.cos(theta);
					n = neighbours(x0,y0,grid);
					
					deltaU  = (n[0]+magnetism)*(new_0-state[0]);
					deltaU += n[1]*(new_1-state[1]);
					deltaU += n[2]*(new_2-state[2]);
					deltaU  = -deltaU/(0.25*temperature);
					if (deltaU<0.0 || Math.random()<Math.exp(-deltaU)){
						grid[x0][y0] = [new_0,new_1,new_2,theta];
					}
				}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();