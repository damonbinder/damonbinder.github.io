(function() {

	var width = 600, height = 600; // Width and height of simulation in pixels.
	var cellSize = 1; // Size of a cell in pixels.
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
				grid[i][j] = Math.round(Math.random()*1.2);
			}
		}
		return grid;
	};

	var grid = makeBlankGrid();
	var temperature = 4;
	var speed = 0;
	var paused = false
	var fire_list = []

	function drawGrid(grid) {
		var val_to_deg, azimuthal;
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				if (grid[x][y]) {
					context.fillStyle = "rgb(0,80,0)";
					context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
				}
			}
		}
	};

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		// Update slider-based variables.

		temperature = Math.pow(10,$("#temperature").val());
		$("#tempdisplay").html(Math.round(1000*temperature)/1000+"");
		speed = Math.pow(10,$("#speed").val());
		$("#speeddisplay").html(Math.round(speed)+"");

		// Run simulation step.
		var x0, y0, new_fire_list;
		if (!paused) {
			for (var i = 0; i < 100*speed; i++){
				x0 = randcell();
				y0 = randcell();
				grid[x0][y0] = 1;

				if (Math.random()<temperature){
					x0 = randcell();
					y0 = randcell();
					if (grid[x0][y0]){
						fire_list.push([x0,y0]);
						grid[x0][y0] = 0;
					}
				}
			if (fire_list.length > 0){
				debugger
				new_fire_list = []
				for (var j = 0; j < fire_list.length; j++){
					x0 = (fire_list[j])[0];
					y0 = (fire_list[j])[1];
					if (grid[x0%xCellCount][(xCellCount+y0-1)%yCellCount]){
						grid[x0%xCellCount][(xCellCount+y0-1)%yCellCount] = 0;
						new_fire_list.push([x0%xCellCount,(xCellCount+y0-1)%yCellCount]);
					}
					if (grid[(xCellCount+x0-1)%xCellCount][y0%yCellCount]){
						grid[(xCellCount+x0-1)%xCellCount][y0%yCellCount] = 0;
						new_fire_list.push([(xCellCount+x0-1)%xCellCount,y0%yCellCount]);
					}
					if (grid[x0%xCellCount][(y0+1)%yCellCount]){
						grid[x0%xCellCount][(y0+1)%yCellCount] = 0;
						new_fire_list.push([x0%xCellCount,(y0+1)%yCellCount]);
					}
					if (grid[(x0+1)%xCellCount][y0%yCellCount]){
						grid[(x0+1)%xCellCount][y0%yCellCount] = 0;
						new_fire_list.push([(x0+1)%xCellCount,y0%yCellCount]);
					}
				fire_list = new_fire_list;
				}
			}
			}
		}

		drawGrid(grid);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();