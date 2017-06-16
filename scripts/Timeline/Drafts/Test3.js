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
var scale  = -9
var x_offset = 100000 // very big will force it to the minimum
var start_up = 0


//event parameters
var dot_height = 30
var dot_width = 5

var event_height = 50
var event_scale = width/4 // determines when events shrink
var event_start = 300
var event_gap = (height-event_start)/6
var event_h_order = [0,2,4,1,3]

// mouseover text
var horizontal_gap = 10
var vertical_gap = 10
var middle_gap = 15
var mo_width = 300

var picture_number = -1

// epoch data ///////////////////////////s/////////////////////////////////////////////////

e_lvl_strt = [10.13987909,9.6599162,8.733197266,8.733197266,6.518514071,-100];
e_colors = [[0xffdd99,0xffeecc],[0xffccff,0xffe6ff],[0xccd6ff,0xe6ebff],[0xe6ff99,0xf2ffcc],[0xf2f2f2,0xffffff]];



// useful functions ////////////////////////////////////////////////////////////////////////////

function year(log_year){
	if (log_year>0){
		return Math.pow(10,log_year)-1
	} else {
		return -Math.pow(10,-log_year)-1
	}
	
}

function log_year(year){
	if (year>2000){
		return -Math.log10(year-2001,10)
	} else {
		return Math.log10(2001-year,10)
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



// fetch the necessary assets ///////////////////////////////////////////////////////////
function get_next() {
	picture_number += 1
	if (picture_number<events.length){
		PIXI.loader
			.add("Images/"+events[picture_number]["image"])
			.load(get_next);
	} else {
		main();
	}
}


var epoch, events;
fetch("epochs.json")
	.then(r=>r.json())
	.then(j=>{
		epoch = j;
		fetch("events.json")
			.then(t=>t.json())
			.then(u=>{
				events = u;
				for(var i = 0; i < events.length; i++){
					events[i]["time"] = log_year(events[i]["time"])	
				}
				get_next();
			})
		})




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


		if (name_horizontal(i)){
			names[i].anchor.set(0);
			names[i].rotation = 1.570796;			
		}
		
		stage.addChild(names[i]);
	}



	// event setup ////////////////////////////////////////////////////////////////////////////	
	ev_picture = []
	ev_width = []

	ev_dot = []
	for(var i = 0; i < events.length; i++){
		ev_picture.push(new PIXI.Sprite(PIXI.loader.resources["Images/"+events[i]["image"]].texture));
		ev_picture[i].y = event_start+event_gap*event_h_order[i%5];

		ev_picture[i].width = event_height*ev_picture[i].width/ev_picture[i].height;
		ev_width[i] = ev_picture[i].width;

		ev_picture[i].height = event_height;

		ev_picture[i].interactive = true;

		// black magic //
		var index = i;
		ev_picture[i].on('mousedown', (function(that,index) {
					event_description.call(that,index);
				}).bind(this,ev_picture[i],index));

		ev_picture[i].on('mouseover', (function(that,index) {
					event_grow.call(that,index);
				}).bind(this,ev_picture[i],index));
		
		ev_picture[i].on('mouseout', (function(that,index) {
					event_shrink.call(that,index);
				}).bind(this,ev_picture[i],index));
		
		stage.addChild(ev_picture[i]);

		ev_dot.push(new PIXI.Graphics())
		ev_dot[i].beginFill(0x44444, 1);
		ev_dot[i].drawRect(0,0,dot_width,dot_height);
		ev_dot[i].y = ev_picture[i].y+25-dot_height/2,

		stage.addChild(ev_dot[i]);
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

	// makes the mouseover text for eras
	function era_description(i){
		// sets heading text
		mo_heading.text = epoch[i]["header"]+" ";
		if (name_horizontal(i)){
			mo_heading.x = Math.floor(this.x+this.height);
			mo_heading.y = Math.floor(this.y + vertical_gap);
		} else {
			mo_heading.x = Math.floor(this.x+this.width + horizontal_gap);
			mo_heading.y = Math.floor(this.y + vertical_gap);
		}
		
		complete_description(epoch[i])
	}

	// makes the mouseover text for events 
	function event_description(i){
		this.displayGroup = topLayer;
		// sets heading text
		mo_heading.text = events[i]["header"]+" ";
		mo_heading.x = Math.floor(this.x+this.width + 20);
		mo_heading.y = Math.floor(this.y+10 + vertical_gap);
		
		// sets body text
		mo_overtext.text = events[i]["description"]+" ";
		mo_overtext.x = mo_heading.x;
		mo_overtext.y = mo_heading.y + mo_heading.height + middle_gap;
		
		//sets textbox
		mo_background.clear()
		//mo_background.lineStyle(4, 0x444444, 1);
		mo_background.beginFill(0xffffff, 1);
		mo_background.drawRect(ev_picture[i].x+ev_picture[i].width,ev_picture[i].y,Math.max(mo_overtext.width,mo_heading.width)+40,ev_picture[i].height);
		
		mo_background.beginFill(0xbbbbbb, 1);
		mo_background.drawRect(ev_picture[i].x,ev_picture[i].y,ev_picture[i].width,ev_picture[i].height);
		
		mo_background.alpha = 1;
		renderer.render(stage) // this makes sure that the textbox renders!
	}

	// this finishes the job of producing the mouseover text
	function complete_description(object){
		// sets body text
		mo_overtext.text = object["description"]+" ";
		mo_overtext.x = mo_heading.x;
		mo_overtext.y = mo_heading.y + mo_heading.height + middle_gap;
		
		//sets textbox
		mo_background.clear()
		mo_background.lineStyle(4, 0x444444, 1);
		mo_background.beginFill(0xffffff, 1);
		mo_background.drawRoundedRect(mo_heading.x-horizontal_gap,mo_heading.y-vertical_gap,Math.max(mo_overtext.width,mo_heading.width)+2*horizontal_gap,mo_overtext.height+mo_heading.height+2*vertical_gap+middle_gap,5);

		mo_background.alpha = 1;
		renderer.render(stage) // this makes sure that the textbox renders!
	}


	// allows events to grow/shrink on mouseover//////////////////////////////////////////////////////////////
	function event_grow(i){
		this.y  = this.y-1.5*this.height;

		this.width  = 4*this.width;
		this.height = 4*this.height;						

		renderer.render(stage);
	}

	function event_shrink(i){
		this.width  = 1/4*this.width;
		this.height = 1/4*this.height;	
		
		this.y  = this.y+1.5*this.height;
	
		renderer.render(stage);
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

		if (offset_change != 0 || scale_change != 0 || start_up<10){
			start_up += 1; // this needs to run at start_up multiple times for some reason???

			// get rid of info ///////////////////////////////////////////////////////////////////////////
			mo_background.alpha = 0;
			mo_overtext.text = " ";
			mo_heading.text  = " ";


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
			
	
			// draw events ///////////////////////////////////////////////////////////////////////////////
			for(var i = 0; i < ev_picture.length; i++){
				center_x = Math.floor((year(events[i]["time"]))*Math.pow(10,scale)+x_offset)
				ev_dot[i].x = center_x-dot_width/2;

				if (center_x<event_scale) {
					ratio = Math.max(0,center_x/event_scale);
					ev_picture[i].width  = ev_width[i]*ratio;
					ev_picture[i].height = event_height*ratio;						
				}

				ev_picture[i].x = Math.floor(center_x+dot_width/2+10);
				ev_picture[i].y = Math.floor(ev_dot[i].y+dot_height/2-ev_picture[i].height/2);
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
		}
		setTimeout(mainLoop, 10); 
	};
			

	mainLoop();
});