height = $(document).height()-5
width  = $(document).width()

//Create the renderer
var renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0xffffff});

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();


// var app = new PIXI.Application(width, height, { backgroundColor : 0xffffff, antialias: true });
// document.body.appendChild(app.view);


epoch_height = 40
// [log end,log start,color,level,name]
epoch = [[0,10.13987909,0x000080,1,'Stelliferous'],[9.605305046,9.6599162,0xcc0000,2,'Hadean'],[9.383815366,9.605305046,0xcc0099,2,'Archean'],[8.733197266,9.383815366,0x6699ff,2,'Proterozoic'],[0,8.733197266,0x00cc00,2,'Phanerozoic'],[8.401400543,8.733197266,0xcc0000,3,'Paleozoic'],[7.819543942,8.401400543,0xff9933,3,'Mesozoic'],[0,7.819543942,0xffff99,3,'Cenozoic'],[8.685741739,8.733197266,0x0066ff,4,'Cambrian'],[8.646403727,8.685741739,0x9999ff,4,'Ordovician'],[8.622214024,8.646403727,0xff99cc,4,'Silurian'],[8.55509445,8.622214024,0xff9966,4,'Devonian'],[8.47567119,8.55509445,0xffcc00,4,'Carboniferous'],[8.401400543,8.47567119,0xcc9900,4,'Permian'],[8.30319606,8.401400543,0x99cc00,4,'Triassic'],[8.161368005,8.30319606,0x009933,4,'Jurassic'],[7.819543942,8.161368005,0x669999,4,'Cretaceous'],[7.361727855,7.819543942,0x33ccff,4,'Paleogene'],[6.301030213,7.361727855,0xff99ff,4,'Neogene'],[0,6.301030213,0xff9966,4,'Quaternary'],[5.477122702,6.518514071,0x0066ff,5,'Lower Paleolithic'],[4.69897869,5.477122702,0x33cccc,5,'Middle Paleolithic'],[4.086395427,4.69897869,0x00cc66,5,'Upper Paleolithic'],[3.724357804,4.086395427,0x669900,5,'Neolithic'],[3.505285674,3.724357804,0x996633,5,'Bronze Age'],[3.398113692,3.505285674,0xcc6600,5,'Iron Age'],[3.176380692,3.398113692,0xffcc66,5,'Classical Era'],[2.699837726,3.176380692,0x99ff99,5,'Medieval'],[2.303196057,2.699837726,0x66ccff,5,'Early Modern'],[0,2.303196057,0xff99ff,5,'Modern']]

function year(log_year){
	return Math.pow(10,log_year)-1
}


function epoch_length(era){
	return (year(era[1])-year(era[0]))
}

function separation(level,scale){
	if(level%2 == 0){
		return Math.pow(10,Math.floor(level/2))*Math.pow(10,scale)
	}else{
		return 2*Math.pow(10,Math.floor(level/2))*Math.pow(10,scale)
	}
}

function name_year(year){
	if (year<10000){
		return " "+Math.round(year) +" years ago"
	} else if (year<1000000-1){
		return " "+Math.round(year/1000) +" thousand years ago"
	} else if (year<1000000000-1){
		return " "+Math.round(year/100000)/10 +" million years ago"
	} else {
		return " "+Math.round(year/100000000)/10 +" billion years ago"
	}
}

//font settings
epoch_style = new PIXI.TextStyle({
	fontFamily: 'Arial',
	fontSize: 36,
});

date_style = new PIXI.TextStyle({
	fontFamily: 'Arial',
	fontSize: 36,
	fill: '#444444',
});



(function() {
	// this sets up the markers on the timeline
	var line_level = 5
	var line_sep = 100

	// initiallising markers
	lines = []
	lines_text = []

	for(var i = 0; i < 50; i++){
		lines.push(new PIXI.Graphics());
		lines[i].beginFill(0x444444, 1);
		lines[i].drawRect(0, 0,4,height);
		stage.addChild(lines[i]);

		lines_text.push(new PIXI.Text(" "+line_level+" ",date_style))
		lines_text[i].anchor.set(0);
		lines_text[i].rotation = 1.570796;
		stage.addChild(lines_text[i]);
	}


	// epoch colourings
	era = []
	for(var i = 0; i < epoch.length; i++){
		era.push(new PIXI.Graphics());
		era[i].beginFill(epoch[i][2], 1);
		era[i].drawRect(0, height-epoch_height*epoch[i][3],epoch_length(epoch[i]), epoch_height);
		stage.addChild(era[i]);
	}
	
	// epoch names
	names = []
	names_width = []
	names_height = []
	for(var i = 0; i < epoch.length; i++){
		names.push(new PIXI.Text(" "+epoch[i][4]+" ",epoch_style))
		names[i].x = year(epoch[i][0]);
		names[i].y = height-epoch_height*epoch[i][3];
		
		names_width[i] = names[i].width;
		names_height[i] = names[i].height;
		
		stage.addChild(names[i]);
	}

	// this sets up timeline navigation
	var down_change = true
	var up_change = true
	var scale_change = 0
	var scale  = 0

	var left_change = true
	var right_change = true
	var x_offset = 0
	var offset_change = 0


	function mainLoop() {

		//check how we should be scaling
		$(document).keydown(function (event){
			if (event.keyCode == 87 && up_change){
				scale_change += 1
				up_change = false
			};
			if (event.keyCode == 83 && down_change){
				scale_change += -1
				down_change = false
			};
		});

		//change the scale
		scale += scale_change*0.005
		scale = Math.max(scale,-Math.log10(13.7/width*Math.pow(10,9)))

		x_offset = x_offset*Math.pow(10,scale_change*0.005)

		$(document).keyup(function (event){
			if (event.keyCode == 87 && !up_change){
				scale_change += -1
				up_change = true
			};
			if (event.keyCode == 83 && !down_change){
				scale_change += 1
				down_change = true
			};
		});

		//change start date
		$(document).keydown(function (event){
			if (event.keyCode == 65 && right_change){
				offset_change += 1
				right_change = false
			};
			if (event.keyCode == 68 && left_change){
				offset_change += -1
				left_change = false
			};
		});

		//change the scale
		x_offset += offset_change
		x_offset = Math.min(x_offset,0)

		$(document).keyup(function (event){
			if (event.keyCode == 65 && !right_change){
				offset_change += -1
				right_change = true
			};
			if (event.keyCode == 68 && !left_change){
				offset_change += 1
				left_change = true
			};
		});


		//drawing epochs
		for(var i = 0; i < epoch.length; i++){
			// scale x values
			names[i].x = (year(epoch[i][0]))*Math.pow(10,scale)+x_offset;
			era[i].x   = (year(epoch[i][0]))*Math.pow(10,scale)+x_offset;
			
			// scale name width and height
			names[i].width  = Math.min(names_width[i],epoch_length(epoch[i])*Math.pow(10,scale));
			names[i].height = names_height[i]*names[i].width/names_width[i];

			// scale era widths
			era[i].width   = epoch_length(epoch[i])*Math.pow(10,scale);
		}


		//drawing lines
		if (line_sep<150){
			line_level += 1
		}else if(line_sep>150*5){
			line_level -= 1
		}
		line_sep = separation(line_level,scale)
		line_start = line_sep*Math.floor(x_offset/line_sep) + x_offset
		for(var i = 0; i < 50; i++){
			x_pos = i*line_sep+line_start
			lines[i].x = x_pos
			lines_text[i].x = x_pos+45
			lines_text[i].text = " "+name_year((x_pos-x_offset)/Math.pow(10,scale))+" "
		}

		renderer.render(stage)

		setTimeout(mainLoop, 1); // Run, run, as fast as you can! 
	};
			

	mainLoop();
}).call();