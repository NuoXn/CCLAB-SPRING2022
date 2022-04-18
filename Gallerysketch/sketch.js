

 

function setup() {

let r = random(0,255);
let g = random(0,255);
let b = random(0,255);

  let canvas=createCanvas(400, 400);
  canvas.parent("my-container")
  background(r, g, b, 105);

  
  noStroke(0);
  fill(0, 180);
  quad3();
  quad2();
 
  triangle132();
  dot2();
  dot1();
  flower3();
  noStroke(0);
  fill(0, 150);
  quad1();

  fill(r, g, b, 200);
  triangle13();
  fill(225, 225, 225, 200);
  triangle2();
  fill(r, g, b, 255);
  flower1();
  fill(r, g, b, 100);
  flower2();
  fill(225, 225, 225, 100);
  center1();
  triangle133();
}

function draw() {}

function triangle4() {
  push();
  translate(width / 2, height / 2);
  scale(2);
  for (let angle = 0; angle < 360; angle += 45) {
    rotate(radians(45));
    push();
    translate(0, 18);
    noStroke();
    fill(225, 225, 225, 90);
    triangle(-8, 0, 0, 40, 8, 0);
    pop();
  }
  pop();
}

function dot2() {
  let num = int(random(10, 25));
  let r = 88;
  // translate(width/2, height/2);
  fill(255);
  noStroke();
  for (let angle = 1; angle < 360; angle = angle + 360 / num) {
    let x = r * cos(radians(angle)) + 200;
    let y = r * sin(radians(angle)) + 200;
    circle(x, y, 5);
  }
}

function dot1() {
  push();
  let num = int(random(5, 20));
  let r = 13;
  // translate(width/2, height/2);
  fill(255, 155);
  noStroke();
  for (let angle = 1; angle < 360; angle = angle + 360 / num) {
    let x = r * cos(radians(angle)) + 200;
    let y = r * sin(radians(angle)) + 200;
    circle(x, y, 2);
  }
  pop();
}
function quad3(){
  push();
  let num = int(random(12, 16));
  translate(width / 2, height / 2);
  scale(-2.3);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    translate(0, 25);
    push();
    beginShape();
    vertex(8, 0);
    vertex(0, 40);
    vertex(32, 61);
    vertex(40, 21);
    endShape();
    beginShape();

    vertex(-8, 0);
    vertex(0, 40);
    vertex(-32, 61);
    vertex(-40, 21);
    endShape();
    pop();
    pop();
  }
  pop();
}
function quad2(){
  push();
  let num = int(random(12, 16));
  translate(width / 2, height / 2);
  scale(1.8);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    translate(0, 25);
    push();
    beginShape();
    vertex(8, 0);
    vertex(0, 40);
    vertex(32, 61);
    vertex(40, 21);
    endShape();
    beginShape();

    vertex(-8, 0);
    vertex(0, 40);
    vertex(-32, 61);
    vertex(-40, 21);
    endShape();
    pop();
    pop();
  }
  pop();
}
function quad1() {
  push();
  let num = int(random(6, 10));
  translate(width / 2, height / 2);
  scale(0.8);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    translate(0, 18);
    push();
    beginShape();
    vertex(8, 0);
    vertex(0, 40);
    vertex(32, 61);
    vertex(40, 21);
    endShape();
    beginShape();

    vertex(-8, 0);
    vertex(0, 40);
    vertex(-32, 61);
    vertex(-40, 21);
    endShape();
    pop();
    pop();
  }
  pop();
}
function triangle133() {
  let r = random(0,255);
let g = random(0,255);
let b = random(0,255);
  let num = int(random(20, 35));
 

  push();
  translate(width / 2, height / 2);
  //scale(3);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    noStroke();
   fill(r, g, b, 170);
    translate(0, 145);
    triangle(-10, 0, 0, 25, 10, 0);
    pop();
  }
  pop();
  push();
  
   push();
  translate(width / 2, height / 2);
 scale(3);
  for (let angle = 0; angle < 360; angle += 360/num) {
    rotate(radians(360/num));
    push();
    translate(0, 25);
    noStroke();
    fill(225, 225, 225, 120);
    triangle(-10, 0, 0, 42, 10, 0);
    pop();
  }
  pop();
}

function triangle132() {
   let r = random(0,255);
let g = random(0,255);
let b = random(0,255);
  let num = int(random(9, 15));
 

  push();
  translate(width / 2, height / 2);
  scale(2);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    noStroke();
    fill(r, g, b, 255);
    translate(0, 50);
    triangle(-15, 0, 0, 15, 15, 0);
    pop();
  }
  pop();
  push();
  
   push();
  translate(width / 2, height / 2);
  scale(2);
  for (let angle = 0; angle < 360; angle += 360/num) {
    rotate(radians(360/num));
    push();
    translate(0, 18);
    noStroke();
    fill(225, 225, 225, 120);
    triangle(-8, 0, 0, 40, 8, 0);
    pop();
  }
  pop();
}
function triangle13() {
   let r = random(0,255);
let g = random(0,255);
let b = random(0,255);
  
  let num = int(random(5, 8));

  push();
  translate(width / 2, height / 2);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    noStroke();
    fill(r, g, b, 255);
    translate(0, 50);
    triangle(-15, 0, 0, 15, 15, 0);
    pop();
  }
  pop();
  push();

  translate(width / 2, height / 2);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    translate(0, 18);
    noStroke();
    fill(225, 225, 225, 200);
    triangle(-8, 0, 0, 40, 8, 0);
    pop();
  }
  pop();
}
function triangle2() {
  let r = random(0,255);
let g = random(0,255);
let b = random(0,255);
 let num = int(random(8, 16));
  push();
  translate(width / 2, height / 2);
  for (let angle = 0; angle < 360; angle += 360 / num) {
    rotate(radians(360 / num));
    push();
    fill(r, g, b, 155);
    noStroke();
    translate(0, 15);
    triangle(-10, 0, 0, 10, 10, 0);
    pop();
  }
  pop();
}

function flower3() {
  push();
  let num = int(random(8, 25));
  fill(225,225,225,200);
  translate(width / 2, height / 2);
  scale(2);
  for (let angle = 0; angle <= 360; angle = angle + 360 / num) { 
    
    rotate(radians(360 / num));
    push();translate(0,110);
    arc(0, 0, 4, 12, radians(45), radians(225));
    pop();
  }
  pop();
}

function flower1() {
  push();
  let num = int(random(5, 10));
  translate(width / 2, height / 2);
  for (let angle = 0; angle <= 360; angle = angle + 360 / num) {
    rotate(radians(360 / num));
    push();
    arc(0, 0, 8, 24, radians(45), radians(225));
    pop();
  }
  pop();
}

function flower2() {
  push();
  let num = int(random(3, 8));
  translate(width / 2, height / 2);
  for (let angle = 0; angle <= 360; angle = angle + 360 / num) {
    rotate(radians(360 / num));
    push();
    arc(0, 0, 6, 20, radians(0), radians(180));
    pop();
  }
  pop();
}

function center1() {
  circle(200, 200, 8);
}
