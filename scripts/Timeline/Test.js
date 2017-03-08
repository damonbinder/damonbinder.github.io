height = 600
width = 800

var app = new PIXI.Application(width, height, { backgroundColor : 0xffffff, antialias: true });
document.body.appendChild(app.view);


epoch_height = 100
// [log end,log start,color,level]
epoch = [[0,1,0xFF700B,1],[1,2,0x993300,1],[0,2,0x003300,2]]

function epoch_length(era){
	return (Math.pow(10,era[1])-Math.pow(10,era[0]))
}

(function() {
	era = new PIXI.Graphics();
	for(var i = 0; i < epoch.length; i++){
		era.beginFill(epoch[i][2], 1);
		era.drawRect(Math.pow(10,epoch[i][0])-1, height-epoch_height*epoch[i][3],epoch_length(epoch[i]), epoch_height);
	}
	app.stage.addChild(era);
	

	var left_change = true
	var right_change = true
	var scroll = 0
	var scale  = 0

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
				left_change =true
			};
		});


		//drawing
		era.width = 100*Math.pow(10,scale)

		setTimeout(mainLoop, 1); // Run, run, as fast as you can!
	};
			

	mainLoop();
}).call();