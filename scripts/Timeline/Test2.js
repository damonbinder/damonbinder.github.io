//basic set up ////////////////////////////////////////////////////////////////////////////

var height = $(document).height()-5;
var width  = $(document).width();

var cursorX = 0;
var cursorY = 0;

var renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0xeeeeee});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

// global variables //////////////////////////////////////////////////////////////////////


// initialize view
var scale  = -1
var x_offset = 100000 // very big will force it to the minimum

// mouseover text
var horizontal_gap = 10
var vertical_gap = 10
var middle_gap = 15
var mo_width = 300


// epoch data ////////////////////////////////////////////////////////////////////////////

var epoch, events;
fetch("epochs.json")
	.then(r=>r.json())
	.then(j=>{
		epoch = j;
		fetch("events.json")
			.then(t=>t.json())
			.then(u=>{
				events = u;
				main();
			})
		})

e_lvl_strt = [10.13987909,9.6599162,8.733197266,8.733197266,6.518514071,-100];
e_colors = [[0xffdd99,0xffeecc],[0xffccff,0xffe6ff],[0xccd6ff,0xe6ebff],[0xe6ff99,0xf2ffcc],[0xf2f2f2,0xffffff]];



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
	return (year(era["start"])-year(era["end"]))
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
	return e_lvl_strt[epoch[i]["level"]]-0.001<epoch[i]["end"]
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

mo_style = new PIXI.TextStyle({
	fontFamily: 'Helvetica',
	fontSize: 14,
	wordWrap: true,
	wordWrapWidth: mo_width,
	fill: '#444444',
});

mo_head = new PIXI.TextStyle({
	fontFamily: 'Helvetica',
	fontSize: 18,
	wordWrap: true,
	wordWrapWidth: mo_width,
	fontWeight: 'bold',
	fill: '#444444',
});


var main = (function() {
	// epoch setup ////////////////////////////////////////////////////////////////////////////	
	era = []
	for(var i = 0; i < epoch.length; i++){
		era.push(new PIXI.Graphics());
		era[i].beginFill(e_colors[epoch[i]["level"]-1][i%2], 1);
		era[i].drawRect(0, epoch_height*(epoch[i]["level"]-1),epoch_length(epoch[i]),height);

		stage.addChild(era[i]);
	}
	
	// epoch names
	names = []
	names_width = []
	names_height = []
	for(var i = 0; i < epoch.length; i++){
		names.push(new PIXI.Text(" "+epoch[i]["name"]+" ",epoch_style))
		names[i].x = year(epoch[i]["end"]);
		names[i].y = epoch_height*(epoch[i]["level"]-1);
		
		names_width[i] = names[i].width;
		names_height[i] = names[i].height;


		names[i].interactive = true;

		// black magic //
		var index = i;
		names[i].on('mousedown', (function(that,index) {
					era_description.call(that,index);
				}).bind(this,names[i],index));
		// names[i].on('mouseout', kill_description())


		if (name_horizontal(i)){
			names[i].anchor.set(0);
			names[i].rotation = 1.570796;			
		}
		
		stage.addChild(names[i]);
	}

	ev_picture = []
	for(var i = 0; i < events.length; i++){
		ev_picture.push(new PIXI.Sprite.fromImage("images/"+events[i]["image"]));
		ev_picture[i].x = 200;
		ev_picture[i].y = 200;
		stage.addChild(ev_picture[i]);
	}


	// mouse over text ////////////////////////////////////////////////////////
	var mo_background = new PIXI.Graphics()
	mo_background.beginFill(0xffffff, 1);
	mo_background.drawRect(0,0,10,10);
	mo_background.alpha = 0;
	stage.addChild(mo_background);

	var mo_overtext = new PIXI.Text('',mo_style);
	mo_overtext.x = 200;
	mo_overtext.y = 200;
	stage.addChild(mo_overtext);

	var mo_heading = new PIXI.Text('',mo_head);
		mo_heading.x = 200;
		mo_heading.y = 200;
		stage.addChild(mo_heading);

	function era_description(i){
		// sets heading text
		mo_heading.text = epoch[i]["header"]+" ";
		if (name_horizontal(i)){
			mo_heading.x = Math.floor(this.x+this.height);
			mo_heading.y = Math.floor(this.y + vertical_gap);
		} else {
			mo_heading.x = Math.floor(this.x+this.width + horizontal_gap);
			mo_heading.y = Math.floor(this.y+10 + vertical_gap);
		}
		
		// sets body text
		mo_overtext.text = epoch[i]["description"]+" ";
		mo_overtext.x = mo_heading.x;
		mo_overtext.y = mo_heading.y + mo_heading.height + middle_gap;
		
		//sets textbox
		mo_background.clear()
		mo_background.lineStyle(4, 0x444444, 1);
		mo_background.beginFill(0xffffff, 1);
		mo_background.drawRoundedRect(mo_heading.x-horizontal_gap,mo_heading.y-vertical_gap,Math.max(mo_overtext.width,mo_heading.width)+2*horizontal_gap,mo_overtext.height+mo_heading.height+2*vertical_gap+middle_gap,5);

		mo_background.alpha = 1;
		mo_background.blur = 10000;
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
		
		if (scale>2.5){
			scale = 2.5;
		} else {
			x_offset = x_offset*Math.pow(10,scale_change*0.01);
		}

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

		// get rid of info
		if (offset_change != 0 || scale_change != 0){
			mo_background.alpha = 0;
			mo_overtext.text = " ";
			mo_heading.text = " ";
		}



		// drawing epochs ////////////////////////////////////////////////////////////////////////////	
		for(var i = 0; i < epoch.length; i++){
			// scale names
			if (name_horizontal(i)){
				names[i].height = Math.floor(Math.min(names_height[i],epoch_length(epoch[i])*Math.pow(10,scale)));
				names[i].width  = Math.floor(names_width[i]*names[i].height/names_height[i]);
				names[i].x      = Math.floor(lyear_pxl(epoch[i]["end"])+epoch_name_offset*names[i].height/names_height[i]);
			} else {
				names[i].x      = Math.floor((year(epoch[i]["end"]))*Math.pow(10,scale)+x_offset);
				names[i].width  = Math.floor(Math.min(names_width[i],epoch_length(epoch[i])*Math.pow(10,scale)));
				names[i].height = Math.floor(names_height[i]*names[i].width/names_width[i]);
			}

			// scale eras
			era[i].width = Math.floor(epoch_length(epoch[i])*Math.pow(10,scale));
			era[i].x     = Math.floor(lyear_pxl(epoch[i]["end"]));
			
		}


		//drawing lines ////////////////////////////////////////////////////////////////////////////	
		if (line_sep<150){
			line_level += 1;
		}else if(line_sep>150*5){
			line_level -= 1;
		}

		line_sep  = separation(line_level,scale);
		sline_sep = separation(line_level-1,scale);

		line_start = x_offset%line_sep;
		sline_start = x_offset%sline_sep;

		for(var i = 0; i < 50; i++){
			x_pos = (i-20)*line_sep+line_start;
			b_marks[i].x = x_pos;
			mark_text[i].x = x_pos-10;
			mark_text[i].text = name_year((x_pos-x_offset)/Math.pow(10,scale),line_level)+" ";
		}

		for(var i = 0; i < 100; i++){
			x_pos = (i-20)*sline_sep+sline_start
			s_marks[i].x = x_pos
		}


		// mouse x y ////////////////////////////////////////////////////////////////////////////
		document.onmousemove = function(e){
		    cursorX = e.pageX;
		    cursorY = e.pageY;
		}


		// rendering ////////////////////////////////////////////////////////////////////////////		
		renderer.render(stage)
		setTimeout(mainLoop, 1); 
	};
			

	mainLoop();
});