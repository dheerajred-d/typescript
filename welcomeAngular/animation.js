'use strict';
~ function() {
  var $ = TweenMax,
   spriteSheet1,
   spriteSheet2,
   copyOneSprite,
   ad= document.getElementById('mainContent');
  
  window.init = function() {
   spriteSheet1 = setupSheet('mainAnim','img/sprite_sheet.jpg',{spriteWidth:300,spriteHeight:378,sheetWidth:9300,sheetHeight:378, totalFrames:31, allowLoop:true,speed:65});
   spriteSheet2 = setupSheet('mainAnim2','img/sprite_sheet.jpg',{spriteWidth:300,spriteHeight:378,sheetWidth:4500,sheetHeight:378, totalFrames:15, allowLoop:true,speed:65});
   copyOneSprite = setupSheet('copyOne','img/copyOne.png',{spriteWidth:545,spriteHeight:90,sheetWidth:3270,sheetHeight:450, totalFrames:25, allowLoop:false,speed:65});
    $.set(ad,{perspective: 1000});
 
    playSpriteSheet();
  }
  function playSpriteSheet(){
       $.delayedCall(1,function() {
        spriteSheet1.ss_play()
        spriteSheet2.ss_play()
        copyOneSprite.ss_playRange(1,26)

      });

    }





}();
