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
				grid[i][j] = [2*Math.PI*Math.random(),Math.acos(1-2*Math.random())];
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n0 = Math.cos((grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[1]);
		n0    += Math.cos((grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[1]);
		n0    += Math.cos((grid[x%xCellCount][(y+1)%yCellCount])[1]);
		n0    += Math.cos((grid[(x+1)%xCellCount][y%yCellCount])[1]);

		var n1 = Math.sin((grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[1])*Math.sin((grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[0]);
		n1    += Math.sin((grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[1])*Math.sin((grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[0]);
		n1    += Math.sin(grid[x%xCellCount][(y+1)%yCellCount][1])*Math.sin(grid[x%xCellCount][(y+1)%yCellCount][0]);
		n1    += Math.sin(grid[(x+1)%xCellCount][y%yCellCount][1])*Math.sin(grid[(x+1)%xCellCount][y%yCellCount][0]);

		var n2 = Math.sin((grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[1])*Math.cos((grid[x%xCellCount][(xCellCount+y-1)%yCellCount])[0]);
		n2    += Math.sin((grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[1])*Math.cos((grid[(xCellCount+x-1)%xCellCount][y%yCellCount])[0]);
		n2    += Math.sin((grid[x%xCellCount][(y+1)%yCellCount])[1])*Math.cos((grid[x%xCellCount][(y+1)%yCellCount])[0]);
		n2    += Math.sin((grid[(x+1)%xCellCount][y%yCellCount])[1])*Math.cos((grid[(x+1)%xCellCount][y%yCellCount])[0]);
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
				val_to_deg = Math.round((grid[x][y])[0]*360/(Math.PI*2)); // Math.round(x*360/xCellCount); \\
				azimuthal  = Math.round(50*(Math.cos((grid[x][y])[1])+1));// Math.round(50*Math.cos(y*Math.PI/xCellCount)+50); \\
				debugger
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
			var x0, y0, new_0, new_1,n, state, deltaU, new_value;
			var bolt = []
			for (var i = 0; i < 10; i++) {
				bolt.push(Math.exp(-4*Math.abs(i+magnetism-2)/temperature));
			}
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					x0 = randcell();
					y0 = randcell();

					state = grid[x0][y0];
					new_0 = 2*Math.PI*Math.random();
					new_1 =  Math.acos(1-2*Math.random());//Math.PI*Math.random();
					n = neighbours(x0,y0,grid);
					
					deltaU  = (n[0]+magnetism)*(Math.cos(new_1)-Math.cos(state[1]));
					deltaU += n[1]*(Math.sin(new_1)*Math.sin(new_0)-Math.sin(state[1])*Math.sin(state[0]));
					deltaU += n[2]*(Math.sin(new_1)*Math.cos(new_0)-Math.sin(state[1])*Math.cos(state[0]));
					deltaU  = -deltaU/(0.25*temperature);
					if (deltaU<0.0 || Math.random()<Math.exp(-deltaU)){
						grid[x0][y0] = [new_0,new_1];
					}
				}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();