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

	function rand_particles() {
		particles = []
		for (var i = 0; i < width*height/(4*cellSize*cellSize); i++) {
			particles.push([randcellx(),randcelly(),0]);
		}
		return particles
	}

	function makeGrid(particles) {
		// First, we make a new array of rows. Then we set those rows.
		var grid = new Array(yCellCount);
		for (var i = 0; i < yCellCount; i++) {
			grid[i] = new Array(xCellCount);
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = 0;
			}
		}
		for (var i = 0; i < particles.length; i++) {
			grid[particles[i][0]][particles[i][1]] = 1;
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n = grid[x%xCellCount][(xCellCount+y-1)%yCellCount];
		n    += grid[(xCellCount+x-1)%xCellCount][y%yCellCount];
		n    += grid[x%xCellCount][(y+1)%yCellCount];
		n    += grid[(x+1)%xCellCount][y%yCellCount];

		n    += diag_fact*grid[(xCellCount+x-1)%xCellCount][(xCellCount+y-1)%yCellCount];
		n    += diag_fact*grid[(xCellCount+x-1)%xCellCount][(y+1)%yCellCount];
		n    += diag_fact*grid[(x+1)%xCellCount][(xCellCount+y-1)%yCellCount];
		n    += diag_fact*grid[(x+1)%xCellCount][(y+1)%yCellCount];
		return n;
	}

	var particles = rand_particles();
	var grid = makeGrid(particles);
	var temperature = 4;
	var gravity = 0;

	var paused = false

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				if (grid[x][y]) {
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
		gravity = parseFloat($("#magnetism").val());
		$("#magdisplay").html(gravity+"");

		// Run simulation step.

		if (!paused) {
			var x0, y0, n, deltaU;
			for (var i = 0; i < particles.length; i++) {
				x0 = randcellx();
				y0 = randcelly();
				if (grid[x0][y0] == 0){
					n = neighbours(x0,y0,grid);
					deltaU = particles[i][2] - n + gravity*(particles[i][1]-y0)/10;
					if (deltaU < 0 || Math.random() < Math.exp(-deltaU/temperature)){
						particles[i] = [x0,y0,n]
					}

				}
			}
			debugger
			grid = makeGrid(particles);
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();