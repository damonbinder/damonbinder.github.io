height = 600
width = 800

var app = new PIXI.Application(width, height, { backgroundColor : 0xffffff, antialias: true });
document.body.appendChild(app.view);


epoch_height = 100
// [log end,log start,color,level,name]
epoch = [[0,1,0xFF700B,1,'steve'],[1,2,0x993300,1,'jerry'],[0,2,0x003300,2,'named eras']]

function year(log_year){
	return Math.pow(10,log_year)-1
}


function epoch_length(era){
	return (year(era[1])-year(era[0]))
}


(function() {
	// epoch colourings
	era = new PIXI.Graphics();
	for(var i = 0; i < epoch.length; i++){
		era.beginFill(epoch[i][2], 1);
		era.drawRect(year(epoch[i][0]), height-epoch_height*epoch[i][3],epoch_length(epoch[i]), epoch_height);
	}
	app.stage.addChild(era);
	
	// epoch names

	names = []
	for(var i = 0; i < epoch.length; i++){
		names.push(new PIXI.Text(epoch[i][4]))
		names[i].x = year(epoch[i][0]);
		names[i].y = height-epoch_height*epoch[i][3];
		names[i].width = epoch_length(epoch[i])
		app.stage.addChild(names[i]);
	}

	var left_change = true
	var right_change = true
	var scroll = 0
	var scale  = 2

	function mainLoop() {

		//check how we should be scaling
		$(document).keydown(function (event){
			if (event.keyCode == 39 && right_change){
				scroll += 1
				right_change = false
			};
			if (event.keyCode == 37 && left_change){
				scroll += -1
				left_change = false
			};
		});

		//change the scale
		scale += scroll*0.005

		$(document).keyup(function (event){
			if (event.keyCode == 39 && !right_change){
				scroll += -1
				right_change = true
			};
			if (event.keyCode == 37 && !left_change){
				scroll += 1
				left_change = true
			};
		});


		//drawing
		era.width = Math.pow(10,scale)
		for(var i = 0; i < epoch.length; i++){
			names[i].width = Math.pow(10,scale)
		}

		setTimeout(mainLoop, 1); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();