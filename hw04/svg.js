var pic = document.getElementById('vimage');
var intervalId



var SetupDCircle = function(){
  var r = 0;
  var dr = -1;

  var dCircle = function(){
    while(pic.lastChild){
      pic.removeChild(pic.lastChild);
    }
    if (r <= 0 || r >= Math.min(500 / 2, 500 / 2)) dr *= -1;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute('cx', 250);
    c.setAttribute('cy', 250);
    c.setAttribute('r', r);
    c.setAttribute('fill', 'red');
    c.setAttribute('stroke', 'black');
    r += dr
  }
  intervalId = window.setInterval( dCircle, 16);
}

document.getElementById('startCircle').addEventListener('click', SetupDCircle);
