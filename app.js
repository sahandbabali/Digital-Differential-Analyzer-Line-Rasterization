let circle1x = 100;
let circle1y = 100;
let circle2x = 700;
let circle2y = 700;

let diameter = 50;

var xpos = 0;
var ypos = 0;

function intersects(p1, p2, p3, p4) {
  function CCW(p1, p2, p3) {
    return (
      (p3[1] - p1[1]) * (p2[0] - p1[0]) > (p2[1] - p1[1]) * (p3[0] - p1[0])
    );
  }
  return (
    CCW(p1, p3, p4) != CCW(p2, p3, p4) && CCW(p1, p2, p3) != CCW(p1, p2, p4)
  );
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  strokeWeight(1);

  for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
      xpos = x * 80;
      ypos = y * 80;

      //chech top
      let top = intersects(
        [circle1x, circle1y],
        [circle2x, circle2y],
        [xpos, ypos],
        [xpos + 80, ypos]
      );

      //chech right
      let right = intersects(
        [circle1x, circle1y],
        [circle2x, circle2y],
        [xpos + 80, ypos],
        [xpos + 80, ypos + 80]
      );
      //chech bottom
      let bottom = intersects(
        [circle1x, circle1y],
        [circle2x, circle2y],
        [xpos + 80, ypos + 80],
        [xpos, ypos + 80]
      );
      //chech left
      let left = intersects(
        [circle1x, circle1y],
        [circle2x, circle2y],
        [xpos, ypos + 80],
        [xpos, ypos]
      );
      console.log(top, bottom, left, right);
      if (top == true || left == true || bottom == true || right == true) {
        fill(50, 50, 50);
        stroke(150, 150, 150);
        rect(xpos, ypos, 80, 80);
      } else {
        stroke(150, 150, 150);
        fill(255, 255, 255);
        rect(xpos, ypos, 80, 80);
      }
    }
  }

  fill(255);
  // noStroke();
  strokeWeight(4);

  if (
    dist(circle1x, circle1y, mouseX, mouseY) < diameter / 2 &&
    mouseIsPressed
  ) {
    // fill(50);
    circle1x = mouseX;
    circle1y = mouseY;
  }
  if (
    dist(circle2x, circle2y, mouseX, mouseY) < diameter / 2 &&
    mouseIsPressed
  ) {
    // fill(50);
    circle2x = mouseX;
    circle2y = mouseY;
  }

  fill(color(255, 0, 0));
  stroke(color(255, 0, 0));
  ellipse(circle1x, circle1y, diameter, diameter);
  ellipse(circle2x, circle2y, diameter, diameter);

  stroke(color(255, 255, 255));
  strokeWeight(4);
  line(circle1x, circle1y, circle2x, circle2y);
}
