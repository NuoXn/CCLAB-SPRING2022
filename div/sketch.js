let status = prompt("Choose one of your favourate number from 0,1,2,3,4");
let x = 1;
let b = 100;
let y = 1;
let z = 1;

function setup() {
  let canvas=createCanvas(400, 400);
  background(0);
  strokeWeight(10);
  stroke(225, 225, 225, 90);
  canvas.parent('sketch-containter');
}

function draw() {
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }

  if (status == 0 && mouseIsPressed) {
    let x = 1;
    if (mouseY <= 400 && mouseX <= 200 && mouseY >= -mouseX + 400) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 200 && (mouseY <= 400) & (mouseY >= mouseX)) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseY >= 0 && mouseX <= 200 && mouseY <= mouseX) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseY >= 0 && mouseX >= 200 && mouseY <= mouseX + 400) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 0 && mouseY <= 200 && mouseY >= mouseX) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 0 && mouseY >= 200 && mouseY <= 400 - mouseX) {
      noStroke();
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
  }

  if (status == 1 && mouseIsPressed) {
    x = x + 0.2;
    if (x >= 10) {
      x = 0.5;
    }
    if (mouseY <= 400 && mouseX <= 200 && mouseY >= -mouseX + 400) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 200 && (mouseY <= 400) & (mouseY >= mouseX)) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseY >= 0 && mouseX <= 200 && mouseY <= mouseX) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseY >= 0 && mouseX >= 200 && mouseY <= mouseX + 400) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 0 && mouseY <= 200 && mouseY >= mouseX) {
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
    if (mouseX >= 0 && mouseY >= 200 && mouseY <= 400 - mouseX) {
      noStroke();
      noStroke();
      circle(mouseX, mouseY, x);
      circle(mouseX, 400 - mouseY, x);
      circle(400 - mouseY, mouseX, x);
      circle(400 - mouseX, 400 - mouseY, x);
      circle(mouseY, mouseX, x);
      circle(mouseY, 400 - mouseX, x);
      circle(400 - mouseX, mouseY, x);
      circle(400 - mouseY, 400 - mouseX, x);
    }
  }
  if (status == 2 && mouseIsPressed) {
    stroke(255, 255, 255, y);
    strokeWeight(z);
    noFill();
    rectMode(CENTER);
    if (mouseIsPressed) {
      y = y + 1;
      b = b - 1;
      z = z + 0.1;
      if (y >= 50 || b <= 10 || z >= 5) {
        y = 1;
        b = 100;
        z = 0.1;
      }
      if (mouseY <= 400 && mouseX <= 200 && mouseY >= -mouseX + 400) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
      if (mouseX >= 200 && (mouseY <= 400) & (mouseY >= mouseX)) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
      if (mouseY >= 0 && mouseX <= 200 && mouseY <= mouseX) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
      if (mouseY >= 0 && mouseX >= 200 && mouseY <= mouseX + 400) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
      if (mouseX >= 0 && mouseY <= 200 && mouseY >= mouseX) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
      if (mouseX >= 0 && mouseY >= 200 && mouseY <= 400 - mouseX) {
        rect(mouseX, mouseY, b, b);
        rect(mouseX, 400 - mouseY, b, b);
        rect(400 - mouseY, mouseX, b, b);
        rect(400 - mouseX, 400 - mouseY, b, b);
        rect(mouseY, mouseX, b, b);
        rect(mouseY, 400 - mouseX, b, b);
        rect(400 - mouseX, mouseY, b, b);
        rect(400 - mouseY, 400 - mouseX, b, b);
      }
    }
  }
  if (status == 3 && mouseIsPressed) {
    stroke(255,255,255);
   strokeWeight(3);
    if (mouseX <= 200 && mouseY <= 200) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      line(mouseX, 400 - mouseY, pmouseX, 400 - pmouseY);
      line(400 - mouseX, mouseY, 400 - pmouseX, pmouseY);
      line(400 - mouseX, 400 - mouseY, 400 - pmouseX, 400 - pmouseY);
    }
    if (mouseX >= 200 && mouseY <= 200) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      line(mouseX, 400 - mouseY, pmouseX, 400 - pmouseY);
      line(400 - mouseX, mouseY, 400 - pmouseX, pmouseY);
      line(400 - mouseX, 400 - mouseY, 400 - pmouseX, 400 - pmouseY);
      if (mouseX >= 200 && 200 <= mouseY <= 400) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        line(mouseX, 400 - mouseY, pmouseX, 400 - pmouseY);
        line(400 - mouseX, mouseY, 400 - pmouseX, pmouseY);
        line(400 - mouseX, 400 - mouseY, 400 - pmouseX, 400 - pmouseY);
      }
      if (mouseX <= 200 && 200 <= mouseY <= 400) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        line(mouseX, 400 - mouseY, pmouseX, 400 - pmouseY);
        line(400 - mouseX, mouseY, 400 - pmouseX, pmouseY);
        line(400 - mouseX, 400 - mouseY, 400 - pmouseX, 400 - pmouseY);
      }
    }
  }
  if (status == 4 && mouseIsPressed) {
    stroke(255,255,255,x);
    strokeWeight(z);
    z=z+0.1
    x=x+1
    if (z>=5||x>=90){
      z=0.1;x=1
    }
    if (mouseX <= 200 && mouseY <= 200) {
      line(pmouseY, pmouseX, mouseY, mouseX);
      line(pmouseY, 400 - pmouseX, mouseY, 400 - mouseX);
      line(400 - pmouseY, pmouseX, 400 - mouseY, mouseX);
      line(400 - pmouseY, 400 - pmouseX, 400 - mouseY, 400 - mouseX);
    }
    if (mouseX >= 200 && mouseY <= 200) {
      line(pmouseY, pmouseX, mouseY, mouseX);
      line(pmouseY, 400 - pmouseX, mouseY, 400 - mouseX);
      line(400 - pmouseY, pmouseX, 400 - mouseY, mouseX);
      line(400 - pmouseY, 400 - pmouseX, 400 - mouseY, 400 - mouseX);
      if (mouseX >= 200 && 200 <= mouseY <= 400) {
        line(pmouseY, pmouseX, mouseY, mouseX);
        line(pmouseY, 400 - pmouseX, mouseY, 400 - mouseX);
        line(400 - pmouseY, pmouseX, 400 - mouseY, mouseX);
        line(400 - pmouseY, 400 - pmouseX, 400 - mouseY, 400 - mouseX);
      }
      if (mouseX <= 200 && 200 <= mouseY <= 400) {
        line(pmouseY, pmouseX, mouseY, mouseX);
        line(pmouseY, 400 - pmouseX, mouseY, 400 - mouseX);
        line(400 - pmouseY, pmouseX, 400 - mouseY, mouseX);
        line(400 - pmouseY, 400 - pmouseX, 400 - mouseY, 400 - mouseX);
      }
    }
  }
}
