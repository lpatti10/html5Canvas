// var theCanvas = document.getElementById('Canvas1');
//       theCanvas.width = 150;
//       theCanvas.height = 150;


// var theCanvas = document.getElementById('Canvas1');
// if (theCanvas && theCanvas.getContext) {
//       var ctx = theCanvas.getContext("2d");
//       if (ctx) {
//             // draw just a stroked rectangle
//             ctx.strokeStyle = "blue";
//             ctx.lineWidth = 5;
//             ctx.strokeRect(25,25,100,125);
            
//             // draw just a filled rectangle
//             ctx.fillStyle = "green";
//             ctx.fillRect(175, 25, 100, 125);
                                                
//             // draw a stroked and filled rectangle
//             ctx.strokeStyle = "red";
//             ctx.fillStyle = "yellow";
//             ctx.lineWidth = 10;
//             ctx.fillRect(325, 25, 100, 125);
//             ctx.strokeRect(325,25,100,125);
            
//             // clear a rectangle
//             ctx.clearRect(15, 75, 450, 50);
//       }
// }


// draw lines of varying widths
var theCanvas = document.getElementById('Canvas1');
if (theCanvas && theCanvas.getContext) {
      var ctx = theCanvas.getContext("2d");
      if (ctx) {
            for (var i = 0; i < 10; i++){
                  ctx.beginPath();
                  ctx.lineWidth = i+1;
                  ctx.moveTo(25, 25+i*15);
                  ctx.lineTo(475, 25+i*15);
                  ctx.stroke();
            }                                   
      }
}
// demonstrate the lineCap endings
var theCanvas = document.getElementById('Canvas2');
if (theCanvas && theCanvas.getContext) {
      var ctx = theCanvas.getContext("2d");
      if (ctx) {

            // draw the cyan vertical guidelines
            ctx.strokeStyle="cyan";
            ctx.lineWidth=1;
            ctx.beginPath();
            ctx.moveTo(50,25);
            ctx.lineTo(50,175);
            ctx.moveTo(450,25);
            ctx.lineTo(450,175);
            ctx.stroke();
            
            // draw lines using each lineCap;
            ctx.lineWidth = 25;
            ctx.strokeStyle="black";
            ctx.lineCap="butt";
            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(450,50);
            ctx.stroke();                                   
            ctx.lineCap="round";
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(450,100);
            ctx.stroke();                                   
            ctx.lineCap="square";
            ctx.beginPath();
            ctx.moveTo(50,150);
            ctx.lineTo(450,150);
            ctx.stroke();                                   
      }
}

// Show the lineJoin variations
var theCanvas = document.getElementById('Canvas3');
if (theCanvas && theCanvas.getContext) {
      var ctx = theCanvas.getContext("2d");
      if (ctx) {
            ctx.lineWidth = 15;
            ctx.strokeStyle="black";
            ctx.lineJoin="round";
            ctx.beginPath();
            ctx.moveTo(25,150);
            ctx.lineTo(75,50);
            ctx.lineTo(125,150);
            ctx.stroke();                                   
            ctx.lineJoin="bevel";
            ctx.beginPath();
            ctx.moveTo(175,150);
            ctx.lineTo(225,50);
            ctx.lineTo(275,150);
            ctx.stroke();                                   
            ctx.lineJoin="miter";
            ctx.beginPath();
            ctx.moveTo(325,150);
            ctx.lineTo(375,50);
            ctx.lineTo(425,150);
            ctx.stroke();                                   
      }
}

var theCanvas = document.getElementById('Canvas4');
if (theCanvas && theCanvas.getContext) {
      var ctx = theCanvas.getContext("2d");
      if (ctx) {
            // set up some drawing information
            ctx.strokeStyle = "red";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;

            // draw the first Rectangle
            ctx.fillRect(25,25,100,125);
            ctx.strokeRect(25,25,100,125);
            
            // now, draw another rectangle with different settings
            ctx.save(); // this will save the current settings
            
            ctx.strokeStyle = "green";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;
            ctx.fillRect(175, 25, 100, 125);
            ctx.strokeRect(175, 25, 100, 125);
            
            ctx.restore(); // now restore the original settings
            
            // draw a stroked and filled rectangle
            ctx.fillRect(325, 25, 100, 125);
            ctx.strokeRect(325,25,100,125);

      }
}



// Logo tutorial
window.onload = function() {
    var theCanvas = document.getElementById('myCanvasElement');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if(ctx){

            // begin Drawscript code

            // circles
            ctx.fillStyle="rgba(255,255,255,.6)";
            ctx.beginPath();
            ctx.moveTo(47,19);
            ctx.bezierCurveTo(47,26,42,31,36,31);
            ctx.bezierCurveTo(29,31,24,26,24,19);
            ctx.bezierCurveTo(24,13,29,7,36,7);
            ctx.bezierCurveTo(42,7,47,13,47,19);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(73,28);
            ctx.bezierCurveTo(73,32,69,36,64,36);
            ctx.bezierCurveTo(59,36,55,32,55,28);
            ctx.bezierCurveTo(55,23,59,19,64,19);
            ctx.bezierCurveTo(69,19,73,23,73,28);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(59,46);
            ctx.bezierCurveTo(59,49,57,51,54,51);
            ctx.bezierCurveTo(52,51,50,49,50,46);
            ctx.bezierCurveTo(50,44,52,42,54,42);
            ctx.bezierCurveTo(57,42,59,44,59,46);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(75,41);
            ctx.bezierCurveTo(75,42,75,42,74,42);
            ctx.bezierCurveTo(73,42,72,42,72,41);
            ctx.bezierCurveTo(72,40,73,39,74,39);
            ctx.bezierCurveTo(75,39,75,40,75,41);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(44,42);
            ctx.bezierCurveTo(44,45,42,47,39,47);
            ctx.bezierCurveTo(36,47,33,45,33,42);
            ctx.bezierCurveTo(33,39,36,37,39,37);
            ctx.bezierCurveTo(42,37,44,39,44,42);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(25,44);
            ctx.bezierCurveTo(25,48,21,51,17,51);
            ctx.bezierCurveTo(13,51,10,48,10,44);
            ctx.bezierCurveTo(10,40,13,36,17,36);
            ctx.bezierCurveTo(21,36,25,40,25,44);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(44,62);
            ctx.bezierCurveTo(44,65,42,68,39,68);
            ctx.bezierCurveTo(35,68,33,65,33,62);
            ctx.bezierCurveTo(33,59,35,57,39,57);
            ctx.bezierCurveTo(42,57,44,59,44,62);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(73,67);
            ctx.bezierCurveTo(73,74,67,79,60,79);
            ctx.bezierCurveTo(53,79,47,74,47,67);
            ctx.bezierCurveTo(47,59,53,54,60,54);
            ctx.bezierCurveTo(67,54,73,59,73,67);
            ctx.fill();


            // letter shapes
            ctx.beginPath();
            ctx.moveTo(89,36);
            ctx.lineTo(89,31);
            ctx.lineTo(110,31);
            ctx.lineTo(110,36);
            ctx.lineTo(102,36);
            ctx.lineTo(102,56);
            ctx.lineTo(96,56);
            ctx.lineTo(96,36);
            ctx.lineTo(89,36);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(125,31);
            ctx.bezierCurveTo(126,31,127,31,128,31);
            ctx.bezierCurveTo(129,32,130,32,131,33);
            ctx.bezierCurveTo(131,34,132,34,132,35);
            ctx.bezierCurveTo(133,36,133,37,133,38);
            ctx.bezierCurveTo(133,39,132,41,132,42);
            ctx.bezierCurveTo(131,43,130,44,129,44);
            ctx.lineTo(129,44);
            ctx.bezierCurveTo(129,45,130,45,130,45);
            ctx.bezierCurveTo(131,46,131,46,132,47);
            ctx.lineTo(132,48);
            ctx.bezierCurveTo(132,49,132,50,132,50);
            ctx.bezierCurveTo(132,51,132,51,132,52);
            ctx.lineTo(133,53);
            ctx.bezierCurveTo(133,54,133,54,133,55);
            ctx.bezierCurveTo(133,56,133,56,133,56);
            ctx.lineTo(128,56);
            ctx.bezierCurveTo(128,56,127,55,127,53);
            ctx.bezierCurveTo(127,52,127,51,127,50);
            ctx.bezierCurveTo(127,49,126,48,126,47);
            ctx.bezierCurveTo(125,47,124,46,123,46);
            ctx.lineTo(117,46);
            ctx.lineTo(117,56);
            ctx.lineTo(112,56);
            ctx.lineTo(112,31);
            ctx.lineTo(125,31);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(150,31);
            ctx.lineTo(159,56);
            ctx.lineTo(153,56);
            ctx.lineTo(152,51);
            ctx.lineTo(142,51);
            ctx.lineTo(140,56);
            ctx.lineTo(134,56);
            ctx.lineTo(144,31);
            ctx.lineTo(150,31);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(163,56);
            ctx.lineTo(154,31);
            ctx.lineTo(160,31);
            ctx.lineTo(166,49);
            ctx.lineTo(166,49);
            ctx.lineTo(172,31);
            ctx.lineTo(177,31);
            ctx.lineTo(169,56);
            ctx.lineTo(163,56);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(198,31);
            ctx.lineTo(198,36);
            ctx.lineTo(185,36);
            ctx.lineTo(185,41);
            ctx.lineTo(197,41);
            ctx.lineTo(197,45);
            ctx.lineTo(185,45);
            ctx.lineTo(185,52);
            ctx.lineTo(199,52);
            ctx.lineTo(199,56);
            ctx.lineTo(179,56);
            ctx.lineTo(179,31);
            ctx.lineTo(198,31);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(207,31);
            ctx.lineTo(207,52);
            ctx.lineTo(219,52);
            ctx.lineTo(219,56);
            ctx.lineTo(201,56);
            ctx.lineTo(201,31);
            ctx.lineTo(207,31);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(224,31);
            ctx.lineTo(224,54);
            ctx.lineTo(238,54);
            ctx.lineTo(238,56);
            ctx.lineTo(222,56);
            ctx.lineTo(222,31);
            ctx.lineTo(224,31);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(238,39);
            ctx.bezierCurveTo(238,37,239,36,240,34);
            ctx.bezierCurveTo(241,33,242,32,244,31);
            ctx.bezierCurveTo(245,31,247,30,249,30);
            ctx.bezierCurveTo(251,30,253,31,254,31);
            ctx.bezierCurveTo(256,32,257,33,258,34);
            ctx.bezierCurveTo(259,36,260,37,260,39);
            ctx.bezierCurveTo(261,40,261,42,261,44);
            ctx.bezierCurveTo(261,45,261,47,260,49);
            ctx.bezierCurveTo(260,50,259,52,258,53);
            ctx.bezierCurveTo(257,54,256,55,254,56);
            ctx.bezierCurveTo(253,56,251,57,249,57);
            ctx.bezierCurveTo(247,57,245,56,244,56);
            ctx.bezierCurveTo(242,55,241,54,240,53);
            ctx.bezierCurveTo(239,52,238,50,238,49);
            ctx.bezierCurveTo(237,47,237,45,237,44);
            ctx.bezierCurveTo(237,42,237,40,238,39);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(284,56);
            ctx.lineTo(284,52);
            ctx.lineTo(283,52);
            ctx.bezierCurveTo(283,53,283,53,282,54);
            ctx.bezierCurveTo(281,55,281,55,280,56);
            ctx.bezierCurveTo(279,56,278,56,277,57);
            ctx.bezierCurveTo(276,57,276,57,275,57);
            ctx.bezierCurveTo(273,57,271,56,269,56);
            ctx.bezierCurveTo(268,55,267,54,266,53);
            ctx.bezierCurveTo(265,52,264,50,263,49);
            ctx.bezierCurveTo(263,47,263,45,263,44);
            ctx.bezierCurveTo(263,42,263,40,263,39);
            ctx.bezierCurveTo(264,37,265,36,266,34);
            ctx.bezierCurveTo(267,33,268,32,269,31);
            ctx.bezierCurveTo(271,31,273,30,275,30);
            ctx.bezierCurveTo(276,30,277,30,278,31);
            ctx.bezierCurveTo(280,31,281,32,282,32);
            ctx.bezierCurveTo(283,33,283,34,284,35);
            ctx.bezierCurveTo(285,36,285,37,285,39);
            ctx.lineTo(283,39);
            ctx.bezierCurveTo(283,38,283,37,282,37);
            ctx.bezierCurveTo(282,36,281,35,280,34);
            ctx.bezierCurveTo(280,34,279,33,278,33);
            ctx.bezierCurveTo(277,33,276,32,275,32);
            ctx.bezierCurveTo(273,32,272,33,270,33);
            ctx.bezierCurveTo(269,34,268,35,267,36);
            ctx.bezierCurveTo(267,37,266,38,266,39);
            ctx.bezierCurveTo(265,41,265,42,265,44);
            ctx.bezierCurveTo(265,45,265,46,266,48);
            ctx.bezierCurveTo(266,49,267,50,267,51);
            ctx.bezierCurveTo(268,52,269,53,270,54);
            ctx.bezierCurveTo(272,54,273,55,275,55);
            ctx.bezierCurveTo(276,55,277,55,278,54);
            ctx.bezierCurveTo(280,54,280,53,281,52);
            ctx.bezierCurveTo(282,51,283,50,283,49);
            ctx.bezierCurveTo(283,48,283,47,283,45);
            ctx.lineTo(275,45);
            ctx.lineTo(275,43);
            ctx.lineTo(286,43);
            ctx.lineTo(286,56);
            ctx.lineTo(284,56);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(288,39);
            ctx.bezierCurveTo(289,37,289,36,290,34);
            ctx.bezierCurveTo(291,33,293,32,294,31);
            ctx.bezierCurveTo(296,31,297,30,299,30);
            ctx.bezierCurveTo(301,30,303,31,305,31);
            ctx.bezierCurveTo(306,32,307,33,308,34);
            ctx.bezierCurveTo(309,36,310,37,311,39);
            ctx.bezierCurveTo(311,40,311,42,311,44);
            ctx.bezierCurveTo(311,45,311,47,311,49);
            ctx.bezierCurveTo(310,50,309,52,308,53);
            ctx.bezierCurveTo(307,54,306,55,305,56);
            ctx.bezierCurveTo(303,56,301,57,299,57);
            ctx.bezierCurveTo(297,57,296,56,294,56);
            ctx.bezierCurveTo(293,55,291,54,290,53);
            ctx.bezierCurveTo(289,52,289,50,288,49);
            ctx.bezierCurveTo(288,47,287,45,287,44);
            ctx.bezierCurveTo(287,42,288,40,288,39);
            ctx.fill();

            // ground/background/negative space letter shapes

            ctx.globalCompositeOperation = 'destination-out';
            // repairs transparency rendering positive
            ctx.fillStyle="rgb(255,255,255)";
            ctx.beginPath();
            ctx.moveTo(123,42);
            ctx.bezierCurveTo(125,42,126,42,126,42);
            ctx.bezierCurveTo(127,41,127,40,127,39);
            ctx.bezierCurveTo(127,37,127,37,126,36);
            ctx.bezierCurveTo(126,35,125,35,123,35);
            ctx.lineTo(117,35);
            ctx.lineTo(117,42);
            ctx.lineTo(123,42);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(150,46);
            ctx.lineTo(147,37);
            ctx.lineTo(147,37);
            ctx.lineTo(143,46);
            ctx.lineTo(150,46);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(240,48);
            ctx.bezierCurveTo(240,49,241,50,242,51);
            ctx.bezierCurveTo(243,52,244,53,245,54);
            ctx.bezierCurveTo(246,54,247,55,249,55);
            ctx.bezierCurveTo(251,55,252,54,253,54);
            ctx.bezierCurveTo(255,53,256,52,256,51);
            ctx.bezierCurveTo(257,50,258,49,258,48);
            ctx.bezierCurveTo(258,46,259,45,259,44);
            ctx.bezierCurveTo(259,42,258,41,258,39);
            ctx.bezierCurveTo(258,38,257,37,256,36);
            ctx.bezierCurveTo(256,35,255,34,253,33);
            ctx.bezierCurveTo(252,33,251,32,249,32);
            ctx.bezierCurveTo(247,32,246,33,245,33);
            ctx.bezierCurveTo(244,34,243,35,242,36);
            ctx.bezierCurveTo(241,37,240,38,240,39);
            ctx.bezierCurveTo(240,41,240,42,240,44);
            ctx.bezierCurveTo(240,45,240,46,240,48);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(290,48);
            ctx.bezierCurveTo(291,49,291,50,292,51);
            ctx.bezierCurveTo(293,52,294,53,295,54);
            ctx.bezierCurveTo(296,54,298,55,299,55);
            ctx.bezierCurveTo(301,55,302,54,304,54);
            ctx.bezierCurveTo(305,53,306,52,307,51);
            ctx.bezierCurveTo(307,50,308,49,308,48);
            ctx.bezierCurveTo(309,46,309,45,309,44);
            ctx.bezierCurveTo(309,42,309,41,308,39);
            ctx.bezierCurveTo(308,38,307,37,307,36);
            ctx.bezierCurveTo(306,35,305,34,304,33);
            ctx.bezierCurveTo(302,33,301,32,299,32);
            ctx.bezierCurveTo(298,32,296,33,295,33);
            ctx.bezierCurveTo(294,34,293,35,292,36);
            ctx.bezierCurveTo(291,37,291,38,290,39);
            ctx.bezierCurveTo(290,41,290,42,290,44);
            ctx.bezierCurveTo(290,45,290,46,290,48);
            ctx.fill();

            // end Drawscript code
        }
    }
}

