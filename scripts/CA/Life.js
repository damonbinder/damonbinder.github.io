(function() {

	//var width = 600, height = 600; // Width and height of simulation in pixels.
	var width = 501, height = 501; // Width and height of simulation in pixels.
	var cellSize = 3; // Size of a cell in pixels.
	var yCellCount = Math.floor(height/cellSize); // Number of cells in the up-down direction.
	var xCellCount = Math.floor(width/cellSize); // Number of cells in the left-right direction.
	var context = $("#canvas").get(0).getContext("2d");


	context.canvas.width = width;
	context.canvas.height = height;

	function neighbours(x,y,grid) {
		var n = grid[x%xCellCount][(yCellCount+y-1)%yCellCount];
		n += grid[x%xCellCount][(y+1)%yCellCount];
		n += grid[(x+1)%xCellCount][y%yCellCount];
		n += grid[(xCellCount+x-1)%xCellCount][y%yCellCount];

		n += grid[(x+1)%xCellCount][(yCellCount+y-1)%yCellCount];
		n += grid[(x+1)%xCellCount][(y+1)%yCellCount];
		n += grid[(xCellCount+x-1)%xCellCount][(yCellCount+y-1)%yCellCount];
		n += grid[(xCellCount+x-1)%xCellCount][(y+1)%yCellCount];
		return n;
	}

	function in_list(number,list){
		for (var i = 0; i<list.length; i++){
			if (number == list[i]) {
				return true
			}
		}
		return false
	}

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

	var grid = makeBlankGrid();


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

	var birth = [3]
	var survive = [2,3]

	var add_square = false
	var take_square = false
	var counter = 1




	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		// Makes new squares
		$(document).mousedown(function (event){
			if (event.button == 0){
				add_square = true
				var new_x = event.pageX-canvas.offsetLeft - cellSize/2;
				var new_y = event.pageY-canvas.offsetTop  - cellSize/2;
	
				if (new_x > 0 && new_y > 0 && new_x < width && new_y < height){
					grid[Math.round(new_x/cellSize)][Math.round(new_y/cellSize)] = 1;
				}
			} else {
				take_square = true
				var new_x = event.pageX-canvas.offsetLeft - cellSize/2;
				var new_y = event.pageY-canvas.offsetTop  - cellSize/2;
				if (new_x > 0 && new_y > 0 && new_x < width && new_y < height){
					grid[Math.round(new_x/cellSize)][Math.round(new_y/cellSize)] = 0;
				}
			}
		});

		$(document).mousemove(function (event){
			if (add_square){
				var new_x = event.pageX-canvas.offsetLeft;
				var new_y = event.pageY-canvas.offsetTop;
				if (new_x > 0 && new_y > 0 && new_x < width && new_y < height){
					grid[Math.round(new_x/cellSize)][Math.round(new_y/cellSize)] = 1;
				}
			}
			if (take_square){
				take_square = true
				var new_x = event.pageX-canvas.offsetLeft;
				var new_y = event.pageY-canvas.offsetTop;
				if (new_x > 0 && new_y > 0 && new_x < width && new_y < height){
					grid[Math.round(new_x/cellSize)][Math.round(new_y/cellSize)] = 0;
				}
			}
		});

		$(document).mouseup(function (event){
			if (event.button == 0){
				add_square = false
			} else {
				take_square = false
			}
		});
		

		// Randomise button
		document.getElementById("random").onclick = (function() {
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					grid[x][y] = Math.floor(2*Math.random());
				}
			}
		});

		// Clear button
		document.getElementById("clear").onclick = (function() {
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					grid[x][y] = 0;
				}
			}
		});

		// Check Boxes
		birth = []
		survive = []
		for (var i = 0; i < 9; i++) {
			var birth_id   = "b"+i;
			var survive_id = "s"+i;
			if ((document.getElementById(birth_id)).checked){
				birth += i
			}
			if ((document.getElementById(survive_id)).checked){
				survive += i
			}

		}

		// sim speed
		speed = $("#speed").val();
		$("#speedDisplay").html("Speed:"+speed+"");
		if (speed<1){
			$("#speedDisplay").html("Paused");
		}


		// Run simulation step.
		if (counter<100/speed){
			counter += 1
		} else if(!take_square && !add_square) {
			var new_grid = makeBlankGrid();
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					var n = neighbours(x,y,grid) ;
					if (grid[x][y] == 0 && in_list(n,birth)) {
						new_grid[x][y] = 1;
					} else if (grid[x][y] == 1 && in_list(n,survive)){
						new_grid[x][y] = 1;
					}
				}
			}
			grid = new_grid;
			counter = 1
		}
		
		drawGrid(grid);

		setTimeout(mainLoop,0);
	};
			

	mainLoop();
}).call();