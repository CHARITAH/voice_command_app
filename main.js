screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apple = "";

function preload() {
  img = loadImage('appl.png');
}

recognition.onresult = function(event) {
to_number = Number(content);
if(Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set";
}
else {
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
}
}

function setup() {
  screen_width = window.innerWidth();
  screen_height = window.innerHeight();
  canvas = createCanvas(screen_height, screen_height - 150);
  canvas.position(0 , 150);
}

function draw(){
  if(draw_apple == "set");{
    for(var i = 1; i <= to_number; i++);
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
    document.getElementById("status").innerHTML = to_number + "Aplles drawn";
    
}

speak(); {
  speak_data = to_number + "Apples drawn";
}


