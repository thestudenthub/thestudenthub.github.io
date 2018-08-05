var x = [];
var y = [];
var trailSize = 20;

function setup() {
 canvas = createCanvas(window.innerWidth, window.innerHeight);


 for (var i = 0; i < x.length; i++) {
    x[i] = 0;
    y[i] = 0;
 }

 for (var j = 0; j < trailSize; j++) {
   x.push(10);
   y.push(10);
 }
}

function draw() {
 background(62, 96, 111);

 for (var i = 0; i < x.length - 1; i++) {
   x[i] = x[i + 1];
   y[i] = y[i + 1];

   fill(i*2);

   ellipse(x[i], y[i], i, i);
 }
 x[x.length-1] = mouseX;
 y[y.length-1] = mouseY;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};

