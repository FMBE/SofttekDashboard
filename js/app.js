var technologies = [
  {technologyName: "AngularJS", buisnessImpact: "low", timeImpact: "3", technologyType: "generate", author: "Fausto Murillo"},
  {technologyName: "EmberJS", buisnessImpact: "medium", timeImpact: "0", technologyType: "improve", author: "Carlos Murillo"}
]
var radarWidth = document.getElementById('radar-container').offsetWidth;
var coordinateX;
var coordinateY;
var i;
var $testButton;
var degree=5;
radarWidth = radarWidth - 40;
for(i=0; i<35; i++)
{
coordinateX = (radarWidth/-2)*Math.cos(degree * Math.PI/180);
coordinateY = (radarWidth/-2)*Math.sin(degree * Math.PI/180);
if(degree!==45&&degree!==90&&degree!==135){
  $testButton = $('<button/>').attr({
    class: 'improve',
    style: 'left:' + (coordinateX + (radarWidth/2)+10) + 'px;top:' + (coordinateY + (radarWidth/2)+20) + 'px;position: absolute;'
  });
  $('#radar-container').append($testButton);
}
degree=degree+5;
}
//Estos son lineas de prueba
degree = 5;
radarWidth = document.getElementById('radar-container').offsetWidth;
radarWidth = radarWidth - 110;
for(i=0; i<35; i++)
{
coordinateX = (radarWidth/-2)*Math.cos(degree * Math.PI/180);
coordinateY = (radarWidth/-2)*Math.sin(degree * Math.PI/180);
if(degree!==45&&degree!==90&&degree!==135){
  $testButton = $('<button/>').attr({
    class: 'generate',
    style: 'left:' + (coordinateX + (radarWidth/2)+45) + 'px;top:' + (coordinateY + (radarWidth/2)+55) + 'px;position: absolute;'
  });
  $('#radar-container').append($testButton);
}
degree=degree+5;
}
