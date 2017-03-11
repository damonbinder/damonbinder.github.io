//basic set up ////////////////////////////////////////////////////////////////////////////

height = $(document).height()-5
width  = $(document).width()

var renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0xeeeeee});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

// global variables //////////////////////////////////////////////////////////////////////

// initialize view
var scale  = 3
var x_offset = 100000 // very big will force it to the minimum



// epoch data ////////////////////////////////////////////////////////////////////////////


// [log end,log start,level,name]
epoch = [[-1.17609125,10.13987909,1,'Stelliferous'],[9.605305046,9.6599162,2,'Hadean'],[9.383815366,9.605305046,2,'Archean'],[8.733197266,9.383815366,2,'Proterozoic'],[-1.17609125,8.733197266,2,'Phanerozoic'],[8.401400543,8.733197266,3,'Paleozoic'],[7.819543942,8.401400543,3,'Mesozoic'],[-1.17609125,7.819543942,3,'Cenozoic'],[8.685741739,8.733197266,4,'Cambrian'],[8.646403727,8.685741739,4,'Ordovician'],[8.622214024,8.646403727,4,'Silurian'],[8.55509445,8.622214024,4,'Devonian'],[8.47567119,8.55509445,4,'Carboniferous'],[8.401400543,8.47567119,4,'Permian'],[8.30319606,8.401400543,4,'Triassic'],[8.161368005,8.30319606,4,'Jurassic'],[7.819543942,8.161368005,4,'Cretaceous'],[7.361727855,7.819543942,4,'Paleogene'],[6.301030213,7.361727855,4,'Neogene'],[-1.17609125,6.301030213,4,'Quaternary'],[5.477122702,6.518514071,5,'Lower Paleolithic'],[4.69897869,5.477122702,5,'Middle Paleolithic'],[4.086395427,4.69897869,5,'Upper Paleolithic'],[3.724357804,4.086395427,5,'Neolithic'],[3.505285674,3.724357804,5,'Bronze Age'],[3.398113692,3.505285674,5,'Iron Age'],[3.176380692,3.398113692,5,'Classical Era'],[2.699837726,3.176380692,5,'Medieval'],[2.303196057,2.699837726,5,'Early Modern'],[-1.17609125,2.303196057,5,'Modern']]
e_lvl_strt = [10.13987909,9.6599162,8.733197266,8.733197266,6.518514071,-100]
e_colors = [[0xffdd99,0xffeecc],[0xffccff,0xffe6ff],[0xccd6ff,0xe6ebff],[0xe6ff99,0xf2ffcc],[0xf2f2f2,0xffffff]]



//useful functions ////////////////////////////////////////////////////////////////////////////

function year(log_year){
	if (log_year>0){
		return Math.pow(10,log_year)-1
	} else {
		return -Math.pow(10,-log_year)-1
	}
	
}

function lyear_pxl(log_year){
	return year(log_year)*Math.pow(10,scale)+x_offset;
}


function epoch_length(era){
	return (year(era[1])-year(era[0]))
}

function name_year(year,level){
	if (Math.round(year) == -16){
		return("   "+2016+" AD")
	} else if (Math.round(year) == 2000){
		return(" "+1+" AD")
	} else if (Math.round(year) == 0 && level>7){
		return("  Now")
	} else if (year<-17){
		return(" ")
	} else if(year<1999){
		return(" "+Math.round(2000-year)+" AD")
	} else if (level<8){
		return " "+Math.round(year-2000) +" BC"
	} else if (year<1000000-1){
		return " "+Math.round(year/1000) +" TYA"
	} else if (year<1000000000-1){
		return " "+Math.round(year/100000)/10 +" MYA"
	} else {
		return " "+Math.round(year/100000000)/10 +" BYA"
	}
}

function separation(level,scale){
	if(level%2 == 0){
		return Math.pow(10,Math.floor(level/2))*Math.pow(10,scale)
	}else{
		return 2*Math.pow(10,Math.floor(level/2))*Math.pow(10,scale)
	}
}


// checks whether an epoch name should be displayed horizontally or vertically
function name_horizontal(i){
	return e_lvl_strt[epoch[i][2]]-0.001<epoch[i][0]
}



//font settings ////////////////////////////////////////////////////////////////////////////
epoch_style = new PIXI.TextStyle({
	fontFamily: 'Helvetica',
	fontSize: 24,
	fill: '#444444',
	fontWeight: 'bold',

});
var epoch_name_offset = 30;
var epoch_height = 30;


date_style = new PIXI.TextStyle({
	fontFamily: 'Helvetica',
	fontSize: 20,
	fill: '#444444',
	fontWeight: 'bold',
});



(function() {

	// epoch setup ////////////////////////////////////////////////////////////////////////////	
	era = []
	for(var i = 0; i < epoch.length; i++){
		era.push(new PIXI.Graphics());
		era[i].beginFill(e_colors[epoch[i][2]-1][i%2], 1);
		era[i].drawRect(0, epoch_height*(epoch[i][2]-1),epoch_length(epoch[i]),height);
		stage.addChild(era[i]);
	}
	
	// epoch names
	names = []
	names_width = []
	names_height = []
	for(var i = 0; i < epoch.length; i++){
		names.push(new PIXI.Text(" "+epoch[i][3]+" ",epoch_style))
		names[i].x = year(epoch[i][0]);
		names[i].y = epoch_height*(epoch[i][2]-1);
		
		names_width[i] = names[i].width;
		names_height[i] = names[i].height;		
		
		if (name_horizontal(i)){
			names[i].anchor.set(0);
			names[i].rotation = 1.570796;			
		}
		
		stage.addChild(names[i]);
	}



	// marker set up  ////////////////////////////////////////////////////////////////////////////	
	var line_level = 5
	var line_sep = 100

	// initiallising markers
	b_marks = []
	s_marks = []
	mark_text = []

	for(var i = 0; i < 50; i++){
		b_marks.push(new PIXI.Graphics());
		b_marks[i].beginFill(0x444444, 1);
		b_marks[i].drawRect(0, height-epoch_height,4,epoch_height);
		stage.addChild(b_marks[i]);

		mark_text.push(new PIXI.Text(" "+line_level+" ",date_style))
		mark_text[i].y = height-2*epoch_height
		stage.addChild(mark_text[i]);
	}

	for(var i = 0; i < 100; i++){
		s_marks.push(new PIXI.Graphics());
		s_marks[i].beginFill(0x444444, 1);
		s_marks[i].drawRect(0, height-epoch_height/2,4,epoch_height/2);
		stage.addChild(s_marks[i]);
	}


	// set up the timeline navigation ////////////////////////////////////////////////////////////////////////////	
	var down_change = true
	var up_change = true
	var scale_change = 0

	var left_change = true
	var right_change = true
	var offset_change = 0


	function mainLoop() {

		// change scaling ////////////////////////////////////////////////////////////////////////////	
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
		scale += scale_change*0.01
		scale = Math.max(scale,-Math.log10(13.7/width*Math.pow(10,9)))
		scale = Math.min(scale,2.5)

		x_offset = x_offset*Math.pow(10,scale_change*0.01)

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


		// change start date ////////////////////////////////////////////////////////////////////////////	
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

		//change the x position
		x_offset += 4*offset_change
		x_offset = Math.min(x_offset,16*Math.pow(10,scale))

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




		// drawing epochs ////////////////////////////////////////////////////////////////////////////	
		for(var i = 0; i < epoch.length; i++){
			// scale names
			if (name_horizontal(i)){
				names[i].height  = Math.min(names_height[i],epoch_length(epoch[i])*Math.pow(10,scale));
				names[i].width = names_width[i]*names[i].height/names_height[i];
				names[i].x = lyear_pxl(epoch[i][0])+epoch_name_offset*names[i].height/names_height[i];
			} else {
				names[i].x = (year(epoch[i][0]))*Math.pow(10,scale)+x_offset;
				names[i].width  = Math.min(names_width[i],epoch_length(epoch[i])*Math.pow(10,scale));
				names[i].height = names_height[i]*names[i].width/names_width[i];
			}

			// scale eras
			era[i].width   = epoch_length(epoch[i])*Math.pow(10,scale);
			era[i].x   = lyear_pxl(epoch[i][0]);
			
		}


		//drawing lines ////////////////////////////////////////////////////////////////////////////	
		if (line_sep<150){
			line_level += 1
		}else if(line_sep>150*5){
			line_level -= 1
		}

		line_sep = separation(line_level,scale)
		sline_sep = separation(line_level-1,scale)

		line_start = line_sep*Math.floor(x_offset/line_sep) + x_offset

		for(var i = 0; i < 50; i++){
			x_pos = (i-20)*line_sep+line_start
			b_marks[i].x = x_pos
			mark_text[i].x = x_pos-10
			mark_text[i].text = name_year((x_pos-x_offset)/Math.pow(10,scale),line_level)+" "
		}

		for(var i = 0; i < 100; i++){
			x_pos = (i-20)*sline_sep+line_start
			s_marks[i].x = x_pos
		}


		//rendering ////////////////////////////////////////////////////////////////////////////		
		renderer.render(stage)
		setTimeout(mainLoop, 1); // Run, run, as fast as you can! 
	};
			

	mainLoop();
}).call();