(function(){
  var technologies = [
    {technologyName: "AngularJS", buisnessImpact: "low", timeImpact: "3", technologyType: "generate", author: "Fausto Murillo"},
    {technologyName: "EmberJS", buisnessImpact: "medium", timeImpact: "0", technologyType: "improve", author: "Carlos Murillo"}
  ]

  var r;

  /*x=r*cos(degree)
  y=r*cos(degree)*/

  function coordinateAssignment(){
    var i;
    var coordinateX;
    var coordinateY
    for(i=0;i<=technologies.length;i++){
      switch(technologies[i].timeImpact){
        case 0:
        r=350;
        break;
        case 1:
        r=550;
        break;
        case 2:
        r=750;
        break;
        case 3:
        r=950;
        break;
        case 4:
        r=1150;
        break;
      }
      coordinateX = r*Math.cos(5 * Math.PI/180);
      coordinateY = r*Math.sin(5 * Math.PI/180);

    }
  }
});
