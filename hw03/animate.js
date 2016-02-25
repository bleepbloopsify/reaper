var canvas = document.getElementById("canvas");
var circlebutton = document.getElementById('circlebutton');
var scythebutton = document.getElementById('scythebutton');
var stopbutton = document.getElementById('stopbutton');
var img = new Image(100, 100);

var requestId;

var ctx = canvas.getContext('2d');
ctx.fillStyle = "#FF0000";

var clear = function(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
};

var setupCircleAnimation = function(){
  window.cancelAnimationFrame(requestId);
  console.log("hi");
  var radius = 0, dr = -3;
  ctx.strokeStyle = "#FF0000";
  ctx.fillStyle = "#FF0000";

  var dCircle = function(){
    clear();
    if (radius >= Math.min(canvas.height, canvas.width) / 2 || radius <= 0) dr *= -1;
    radius += dr;
    ctx.beginPath();
    ctx.arc( canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    requestId = window.requestAnimationFrame(dCircle);
  };

  dCircle();
};

var setupScytheAnimation = function(){
  window.cancelAnimationFrame(requestId);

  img.src = "scythe.png";
  var x = canvas.width / 2, y = canvas.height / 2;
  var dx = 4, dy = 4;

  var scytheanimation = function(){
    clear();
    if(0 >= x || x + img.width >= canvas.width) dx *= -2 + 2 * Math.random();
    if(0 >= y || y + img.height >= canvas.height) dy *= -2 + 2 * Math.random();
    x += dx;
    y += dy;
    ctx.drawImage(img, x, y, img.width, img.height);

    window.requestAnimationFrame(scytheanimation);
  };

  scytheanimation();
};

var stopAnimation = function(){
  window.cancelAnimationFrame(requestId);
};

circlebutton.addEventListener('click', setupCircleAnimation);
scythebutton.addEventListener('click', setupScytheAnimation);
stopbutton.addEventListener('click', stopAnimation);
