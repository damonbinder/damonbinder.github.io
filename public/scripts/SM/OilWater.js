(function() {

	var width = 500, height = 500; // Width and height of simulation in pixels.
	var cellSize = 2; // Size of a cell in pixels.
	var yCellCount = Math.floor(height/cellSize); // Number of cells in the up-down direction.
	var xCellCount = Math.floor(width/cellSize); // Number of cells in the left-right direction.
	var diag_fact = 1/Math.sqrt(2)

	function randcellx() {
		return Math.floor(Math.random()*xCellCount);
	}
	function randcelly() {
		return Math.floor(Math.random()*(yCellCount-1))+1;
	}

	var context = $("#canvas").get(0).getContext("2d");

	context.canvas.width = width;
	context.canvas.height = height;

	function num_water(a){
		if (a==1) {
			return 1
		} else {
			return 0
		}
	}

	function rand_particles() {
		particles = []
		for (var i = 0; i < width*height/(6*cellSize*cellSize); i++) {
			particles.push([randcellx(),randcelly(),0]);
		}
		return particles
	}

	function rand_element() {
		return Math.floor(Math.random()*width*height/(6*cellSize*cellSize))
	}

	function makeGrid(oil,water) {
		// First, we make a new array of rows. Then we set those rows.
		var grid = new Array(yCellCount);
		for (var i = 0; i < yCellCount; i++) {
			grid[i] = new Array(xCellCount);
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = 0;
			}
		}
		for (var i = 0; i < water.length; i++) {
			grid[water[i][0]][water[i][1]] = 1;
		}
		for (var i = 0; i < oil.length; i++) {
			if (grid[oil[i][0]][oil[i][1]] == 0) {
				grid[oil[i][0]][oil[i][1]] = 2;
			} else if (Math.random()>0.5){
				grid[oil[i][0]][oil[i][1]] = 2;
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n = num_water(grid[x%xCellCount][(xCellCount+y-1)%yCellCount]);
		n    += num_water(grid[(xCellCount+x-1)%xCellCount][y%yCellCount]);
		n    += num_water(grid[x%xCellCount][(y+1)%yCellCount]);
		n    += num_water(grid[(x+1)%xCellCount][y%yCellCount]);

		n    += diag_fact*num_water(grid[(xCellCount+x-1)%xCellCount][(xCellCount+y-1)%yCellCount]);
		n    += diag_fact*num_water(grid[(xCellCount+x-1)%xCellCount][(y+1)%yCellCount]);
		n    += diag_fact*num_water(grid[(x+1)%xCellCount][(xCellCount+y-1)%yCellCount]);
		n    += diag_fact*num_water(grid[(x+1)%xCellCount][(y+1)%yCellCount]);
		return n;
	}

	var oil = rand_particles();
	var water = rand_particles();
	var grid = makeGrid(oil,water);
	var temperature = 4;
	var gravity = 0;

	var paused = false

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				if (grid[x][y] == 1) {
					context.fillStyle = "rgb(255, 255, 255)";
					context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
				} else if (grid[x][y] == 2) {
					context.fillStyle = "rgb(255, 180, 0)";
					context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
				}
			}
		}
	};

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		// Update slider-based variables.

		temperature = Math.pow(4, parseFloat($("#temperature").val()))-1;
		$("#tempdisplay").html(Math.round(1000*temperature)/1000+"");
		gravity = parseFloat($("#magnetism").val());
		$("#magdisplay").html(gravity+"");

		// Run simulation step.

		if (!paused) {
			var x0, y0, n, deltaU;
			for (var i = 0; i < water.length; i++) {
				x0 = randcellx();
				y0 = randcelly();

				x1 = water[i][0]
				y1 = water[i][1]
				if (grid[x0][y0] == 0){
					n = neighbours(x1,y1,grid)-neighbours(x0,y0,grid);
					deltaU = n + gravity*(water[i][1]-y0)/10;
					if (deltaU < 0 || Math.random() < Math.exp(-deltaU/temperature)){
						water[i] = [x0,y0,0]
					}				
				}
			}
			for (var i = 0; i < oil.length; i++) {
				x0 = randcellx();
				y0 = randcelly();
				if (grid[x0][y0] == 0){
					deltaU = oil[i][2] + gravity*(oil[i][1]-y0)/10;
					if (deltaU < 0 || Math.random() < Math.exp(-deltaU/temperature)){
						oil[i] = [x0,y0,0];
					}
				}
			}

			for (var i = 0; i < width*height/(8*cellSize*cellSize); i++){
				water_p = rand_element();
				oil_p = rand_element();
				x0 = oil[oil_p][0];
				y0 = oil[oil_p][1];
				n = neighbours(x0,y0,grid);

				x1 = water[water_p][0];
				y1 = water[water_p][1];
				deltaU = neighbours(x1,y1,grid)-neighbours(x0,y0,grid) //water[i][2] - n ;
				if (deltaU < 0 || Math.random() < Math.exp(-deltaU/temperature)){
					oil[oil_p] = [water[water_p][0],water[water_p][1],0]
					water[water_p] = [x0,y0,n]
				}
			}
			grid = makeGrid(oil,water);
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();