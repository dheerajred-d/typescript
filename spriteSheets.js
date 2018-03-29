'use strict'
var spriteSheetAnimation = (function(){


 var global = window;
 
 global.setupSheet = function(_animDiv,_theSheet,_args) {
 	//  var declaration
	 var	currState = "s_pause",
			 _args,
			// Define option defaults
			 spriteWidth,
			 spriteHeight,
			 sheetWidth,
			 sheetHeight,
			 totalFrames,
			 speed,
			 allowLoop = false,

			// DO NOT EDIT VARS
			 currFrame = 1,
			 spritesInX,
			 spritesInY,
			 animDiv,
			 rangeStart = 0,
			 rangeEnd = 1,

			 mainLoop = null,
	currFrame = 1;

   //  setUp spriteSheet
   
	animDiv = document.getElementById(_animDiv);
	spriteWidth = _args.spriteWidth;
	spriteHeight = _args.spriteHeight;
	sheetWidth = _args.sheetWidth;
	sheetHeight = _args.sheetHeight;
	totalFrames = _args.totalFrames;
	allowLoop = _args.allowLoop;

	spritesInX = sheetWidth / spriteWidth;
	spritesInY = sheetHeight / spriteHeight;
	speed = _args.speed;
	allowLoop = _args.allowLoop;

	// SETUP DIV
	animDiv.style.position = "absolute";
    animDiv.style.width = _args.spriteWidth + "px";
    animDiv.style.height = _args.spriteHeight + "px";
    animDiv.style.backgroundImage = "url(" +_theSheet+ ")";
    animDiv.style.backgroundRepeat = "no-repeat";
   	animDiv.style.backgroundPosition = "0px 0px";





   	var _requestFrame = function(){
   		if(currState == "s_play") {

		if(currFrame > totalFrames) { 
			currFrame = 1;
		} else if(currFrame == totalFrames && allowLoop == false) {
			currState = "s_pause";
			currFrame = totalFrames;
		}

		var xpos = ((currFrame - 1) % spritesInX);
		var ypos = Math.floor(((currFrame - 1) / spritesInX));

		animDiv.style.backgroundPosition = (-xpos * spriteWidth)+"px "+(-ypos * spriteHeight)+"px";
		currFrame++;

		} else if (currState == "s_rewind") {
			if(currFrame < 1) { 
				currFrame = totalFrames;
			} else if(currFrame <1 && allowLoop == false) {
				currFrame = 1;
				currState = "s_pause";
			}

			if(currFrame <1) { 
				currFrame = totalFrames;
			}

			_upDateSheet();
			currFrame--;

		} else if(currState == "play_range") {
			if(rangeStart < rangeEnd) {

				// Playing forward
				if(currFrame < rangeEnd) {
					_upDateSheet();
					currFrame++;
				} else {
					currState = "s_pause";
				}
			} else {
				
				// Playing backward
				if(currFrame > rangeEnd) {
					_upDateSheet();
					currFrame--;
				} else {
					currState = "s_pause";
				}
			}

		} else if(currState == "s_pause") {
			_ss_deActivate();
		}
   	}

   



   	var _upDateSheet = function () {
		var xpos = ((currFrame - 1) % spritesInX);
		var ypos = Math.floor(((currFrame - 1) / spritesInX));
		animDiv.style.backgroundPosition = (-xpos * spriteWidth)+"px "+(-ypos * spriteHeight)+"px";
    }


    var _ss_activate =function () {
		_ss_deActivate();
		mainLoop = setInterval(_requestFrame, speed);
	}
	var _ss_deActivate = function () {
	clearInterval(mainLoop);
    }

    var _ss_play =  function () {
	 _ss_activate();
	 currState = "s_play";
    }

    var _ss_rewind = function () {
	 _ss_activate();
	 currState = "s_rewind";
    }


    var _ss_pause = function () {
	  currState = "s_pause";
    }
    
    var _ss_goToFrame = function (frame) {
		_ss_deActivate();
		currFrame = frame;
		_upDateSheet();
   }


   var _ss_playRange = function (start, end) {
	_ss_activate();
	rangeStart = start;
	rangeEnd = end;
	currFrame = rangeStart;
	currState = "play_range";
   }

   	return {
            requestFrame : _requestFrame,
            upDateSheet  : _upDateSheet,
            ss_activate  : _ss_activate,
            ss_deActivate: _ss_deActivate,
            ss_play     : _ss_play,
            ss_rewind   : _ss_rewind,
            ss_pause    : _ss_pause,
            ss_goToFrame : _ss_goToFrame,
            ss_playRange : _ss_playRange

        };
}
})()
