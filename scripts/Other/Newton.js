(function() {

	var zoom = 1;
	var centre = [0,0]
	var can_change = true;
	var iteration = 0;

	var width = 500, height = 500; // Width and height of simulation in pixels.
	var cellSize = 1; // Size of a cell in pixels.
	var yCellCount = Math.floor(height/cellSize); // Number of cells in the up-down direction.
	var xCellCount = Math.floor(width/cellSize); // Number of cells in the left-right direction.

	var context = $("#canvas").get(0).getContext("2d");

	context.canvas.width = width;
	context.canvas.height = height;

	function makeBlankGrid() {
		var grid = new Array(yCellCount);
		for (var i = 0; i < yCellCount; i++) {
			grid[i] = new Array(xCellCount);
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = [centre[0]+(i-xCellCount/2)/xCellCount*4/zoom,centre[1]+(j-yCellCount/2)/yCellCount*4/zoom];
			}
		}
		return grid
	}



	function add_c(z1,z2) {
		return [z1[0]+z2[0],z1[1]+z2[1]]
	}

	function mult_c(z1,z2) {
		return [z1[0]*z2[0]-z1[1]*z2[1],z1[0]*z2[1]+z1[1]*z2[0]]
	}

	function sub_c(z1) {
		return [-z1[0],-z1[1]]
	}

	function inv_c(z1) {
		return[z1[0]/(z1[0]*z1[0]+z1[1]*z1[1]),-z1[1]/(z1[0]*z1[0]+z1[1]*z1[1])]
	}


	var grid = makeBlankGrid();
	var root_1 = 0;
	var root_2 = Math.sqrt(3);
	var a_root = [root_1,root_2]

	var paused = false

	function drawGrid(grid) {
		var r, theta
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				r = grid[x][y][0]*grid[x][y][0]+grid[x][y][1]*grid[x][y][1];
				theta = 180+Math.atan2(grid[x][y][1],grid[x][y][0])/(2*Math.PI)*360;
				r = 100*Math.sqrt(r)/4*1/(1+Math.sqrt(r)/4);
				context.fillStyle = "hsl("+theta+", 80%, "+r+"%)";
				context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
			}
		}
	};

	function cubic(z) {
		return mult_c(add_c(mult_c(z,z),[-1,0]),add_c(z,[-root_1,-root_2]))
	}

	function inv_der(z) {
		return inv_c(add_c(mult_c([2,0],mult_c(z,add_c(z,[-root_1,-root_2]))),add_c(mult_c(z,z),[-1,0])))
	}

	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);

		$(document).mousedown(function (event){
			var new_x = event.pageX-canvas.offsetLeft;
			var new_y = event.pageY-canvas.offsetTop;
			if (new_x>0 && new_x<width && new_y>0 && new_y<height && can_change){
				centre[0] += (new_x/cellSize-xCellCount/2)/xCellCount*4/zoom;
				centre[1] += (new_y/cellSize-yCellCount/2)/yCellCount*4/zoom;
				if (event.button == 0){
					zoom = 4*zoom;
				} else {
					zoom = zoom/4;
				}
				can_change = false
				iteration = 0
				grid = makeBlankGrid()
			}

		});

		$(document).mouseup(function (event){
			can_change = true;
		});

		// Run simulation step.
		if (!paused) {
			iteration += 1;
			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					z = grid[x][y]
					grid[x][y] = add_c(z,sub_c(mult_c(cubic(z),inv_der(z))))
				}
			}
		}

		$("#interations").html(iteration+"");

		drawGrid(grid);

		setTimeout(mainLoop, 1); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();