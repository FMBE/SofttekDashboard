var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

/*590cos/sin(3);*/
var coordinates1 = [
  {x: 61, y: 669},
  {x: 63, y: 638},
  {x: 67, y: 608},
  {x: 73, y: 577},
  {x: 80, y: 547}
];
var coordinates2 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates3 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates4 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates5 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates6 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates7 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates8 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates9 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates10 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates11 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates12 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates13 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates14 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates15 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates16 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates17 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates18 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates17 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];
var coordinates18 = [
  {x: 112, y: 558},
  {x: 558, y: 112}
];

context.beginPath();
context.arc(650, 700, 601, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#4472C4';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 600, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#ADCDEA';
context.fill();
context.strokeStyle = '#4472C4';
context.stroke();

context.beginPath();
context.arc(650, 700, 501, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#4472C4';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 500, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#ADCDEA';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 401, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#4472C4';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 400, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#6FA6D9';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 301, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#4472C4';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 300, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#6FA6D9';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 176, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#4472C4';
context.fill();
context.stroke();

context.beginPath();
context.arc(650, 700, 175, 0, Math.PI, true);
context.closePath();
context.lineWidth = 1;
context.fillStyle = '#6FA6D9';
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 700);
context.lineTo(650, 100);
context.stroke();

context.beginPath();
context.moveTo(650, 700);
context.lineTo(250, 250);
context.stroke();

context.beginPath();
context.moveTo(650, 700);
context.lineTo(1050, 250);
context.stroke();

var $testButton = $('<a/>').attr({
  class: 'improve',
  id: 'testButton',
  style: 'left:' + coordinates1[0].x + 'px;top:' + coordinates1[0].y + 'px'
});
var $testButton1 = $('<a/>').attr({
  class: 'generate',
  id: 'testButton',
  style: 'left:63px;top:638px'
});
var $testButton2 = $('<a/>').attr({
  class: 'disrupt',
  id: 'testButton',
  style: 'left:67px;top:608px'
});
var $testButton3 = $('<a/>').attr({
  class: 'mainstream',
  id: 'testButton',
  style: 'left:73px;top:577px'
});
var $testButton4 = $('<a/>').attr({
  class: 'improve',
  id: 'testButton',
  style: 'left:80px;top:547px'
});
$('body').append($testButton,$testButton1,$testButton2,$testButton3,$testButton4);
$(document).on("click", "#testButton", function() {
  alert('button clicked');
});
