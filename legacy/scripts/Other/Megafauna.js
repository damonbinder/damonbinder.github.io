(function() {

	var width = 600, height = 600; // Width and height of simulation in pixels. Each pixel is 10km by 10km
	var cellSize = 6; // Size of a cell in pixels.
	var yCellCount = Math.floor(height/cellSize); // Number of cells in the up-down direction.
	var xCellCount = Math.floor(width/cellSize); // Number of cells in the left-right direction.

	var context = $("#canvas").get(0).getContext("2d");

	context.canvas.width = width;
	context.canvas.height = height;

	function makeBlankGrid() {
		// First, we make a new array of rows. Then we set those rows.
		var grid = new Array(yCellCount);
		for (var i = 0; i < yCellCount; i++) {
			grid[i] = new Array(xCellCount);
			for (var j = 0; j < grid[i].length; j++) {
				grid[i][j] = 20;
			}
		}
		return grid;
	};

	function neighbours(x,y,grid) {
		var n = grid[x][y];
		n    += grid[x%xCellCount][(xCellCount+y-1)%yCellCount];
		n    += grid[x%xCellCount][(y+1)%yCellCount];
		n    += grid[(x+1)%xCellCount][y%yCellCount];
		n    += grid[(xCellCount+x-1)%xCellCount][y%yCellCount];
		return n;
	}

	function randomMove(){
		return Math.floor(3*Math.random()-1)
	}

	var grid = makeBlankGrid();
	var humans = [];
	
	var paused = false;
	var new_point = true;
	
	var population = 0;
	var year = 0;
	var kill_rate = 20;
	
	var death_chance = [];
	var birth_chance = [];
	for (var i = 0; i < 20; i++) {
		death_chance[i] = i*1/120;
		birth_chance[i] = i*1/120+(20-i)/20*0.02;
	}
	for (var i = 20; i < 40; i++) {
		death_chance[i] = i*1/120+(20-i)/20*0.02;
		birth_chance[i] = i*1/120;
	}
	death_chance[40] = 1;
	birth_chance[40] = 0;

	birth_chance[0]  = 0;
	death_chance[0]  = 0;
	birth_chance[1]  = 0;

	function drawGrid(grid) {
		context.fillStyle = "rgb(255, 255, 255)";
		for (var y = 0; y < yCellCount; y++) {
			for (var x = 0; x < xCellCount; x++) {
				val = Math.min(grid[x][y],22);
				if (val != 0){
					context.fillStyle = "hsl("+Math.round(120/22*val)+",100%,"+(50-2*Math.abs(val-10))+"%)";
				} else {
					context.fillStyle = "black"
				}
				context.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
			}
		}
	};

	function drawPoints(humans) {
		for(var i = 0; i<humans.length; i++){
			context.beginPath();
			context.arc(humans[i][0]*cellSize,humans[i][1]*cellSize,3,0,2*Math.PI);
			context.fillStyle = "red";
			context.fill();
			context.stroke();
		}
	};


	function mainLoop() {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, width, height);


		//Update sliders
		kill_rate = $("#kill").val()/100;
		$("#killrate").html(kill_rate+"");
		human_num = $("#human").val();
		$("#humandisplay").html(human_num+"");
		while (human_num>humans.length){
			humans.push([Math.round(xCellCount*Math.random()),Math.round(yCellCount*Math.random())]);
		}
		while (human_num<humans.length){
			humans.shift();
		}

		//Update counters.
		$("#popdisplay").html(population+"");
		$("#year").html(Math.round(year/12)+"");

		// Run simulation step.
		if (!paused) {
			var new_grid = makeBlankGrid();
			population = 0;
			year += 1;

			for (var y = 0; y < yCellCount; y++) {
				for (var x = 0; x < xCellCount; x++) {
					//diffusion
					if (year%6 == 0){
						new_amount = Math.floor((neighbours(x,y,grid)+5*Math.random())/5);
					} else {
						new_amount = grid[x][y];
					}

					//birth and death
					if (Math.random()<birth_chance[new_amount]){
						new_amount += 1;
					}
					if (Math.random()<death_chance[new_amount]){
						new_amount += -1;
					}
					new_grid[x][y] = new_amount;
					population += new_amount;
				}
			}
			grid = new_grid;

			for (var i = 0; i < humans.length; i++){
				new_x = (humans[i][0] + randomMove()+xCellCount)%xCellCount;
				new_y = (humans[i][1] + randomMove()+xCellCount)%xCellCount;
				humans[i] = [new_x,new_y];
				if (Math.random()<kill_rate && grid[new_x][new_y]>0){
					grid[new_x][new_y] += -1;
				}
			}

			//if (year%12 == 0){
			//	if (population>0){
			//		console.log(population);
			//	}
			//}
		}


		drawGrid(grid);
		drawPoints(humans);

		setTimeout(mainLoop, 0); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();