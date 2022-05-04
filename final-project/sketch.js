let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let mic;

let cities = [];
let blu;
function setup() {
  let canvas=createCanvas(800, 580);
  canvas.parent("my-container");

  //https://editor.p5js.org/MOQN/sketches/DtHkaJdLG
   mic = new p5.AudioIn();
  mic.start();
//https://p5js.org/examples/input-clock.html
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71*0.25;
  minutesRadius = radius * 0.6*0.25;
  hoursRadius = radius * 0.5*0.25;
  clockDiameter = radius * 1.7*0.25;

  cx = 700;
  cy = 470;
  cities.push(new City('Wulumuqi', 182, 157, ['Lanzhou','Lasa','Xining','Yinchuan','Huhehaote']));
  cities.push(new City('Shanghai', 580, 367, ['Hangzhou', 'Nanjing','Jinan']));
  cities.push(new City('Hangzhou', 564, 382, ['Shanghai', 'Nanjing','Hefei','Nanchang','Fuzhou']));
  cities.push(new City('Nanjing', 544, 359, ['Shanghai', 'Hangzhou','Hefei','Jinan']));
  cities.push(new City('Hefei', 524, 360, ['Jinan','Wuhan','Zhengzhou','Hangzhou','Nanchang', 'Nanjing']));
  cities.push(new City('Nanchang', 510, 410, ['Hangzhou','Fuzhou','Guangzhou','Wuhan','Hefei','Changsha']));
  cities.push(new City('Guangzhou', 478,496, ['Fuzhou','Nanchang','Changsha','Nanning','Haikou']));
  cities.push(new City('Fuzhou', 559,447, ['Hangzhou', 'Guangzhou','Nanchang']));
  cities.push(new City('Taibei', 592,459, ['Fuzhou','Hangzhou','Guangzhou','Haikou']));
  cities.push(new City('Nanning', 407,500, ['Guangzhou','Haikou','Changsha','Guiyang','Kunming']));
   cities.push(new City('Haikou', 436,545, ['Nanning','Guangzhou']));
  cities.push(new City('Changsha', 470,422, ['Nanning','Nanchang','Guangzhou','Wuhan','Chongqing','Guiyang']));
  cities.push(new City('Wuhan', 486,383, ['Changsha','Nanchang','Hefei','Zhengzhou','Xian']));
  cities.push(new City('Jinan', 515, 290, ['Nanjing','Shanghai','Hefei']));
  cities.push(new City('Tianjin', 515,250, ['Jinan']));
  cities.push(new City('Zhengzhou', 476,321, ['Wuhan','Jinan','Hefei']));
    cities.push(new City('Shijiazhuang', 484, 272, ['Tianjin','Jinan','Zhengzhou']));
  cities.push(new City('Guiyang', 385,446, ['Nanning','Changsha']));
  cities.push(new City('Chongqing', 383,401, ['Guiyang','Changsha','Wuhan']));
  cities.push(new City('Chengdu', 351, 381, ['Chongqing']));
  cities.push(new City('Kunming', 330, 467, ['Nanning','Guiyang','Chengdu']));
  cities.push(new City('Xian', 416, 329, ['Chengdu','Chongqing','Wuhan','Zhengzhou']));
  cities.push(new City('Lasa', 180, 377, ['Kunming','Chengdu','Xining','Wulumuqi']));
  cities.push(new City('Taiyuan', 460, 274, ['Shijiazhuang','Zhengzhou','Xian']));
  cities.push(new City('Xining', 326, 290, ['Lasa','Wulumuqi','Chengdu','Chengdu','Lanzhou']));
  cities.push(new City('Lanzhou', 355, 300, ['Xining','Chengdu','Xian','Yinchuan','Wulumuqi']));
  
  cities.push(new City('Yinchuan', 385,265 ,['Lanzhou','Taiyuan','Wulumuqi','Taiyuan','Huhehaote']));
  cities.push(new City('Huhehaote', 449,231, ['Wulumuqi','Yinchuan','Taiyuan','Beijing']));
  cities.push(new City('Beijing', 503,241, ['Shijiazhuang','Tianjin']));
  cities.push(new City('Shenyang', 583,202, ['Beijing','Tianjin']));
  cities.push(new City('Changchun', 597,167, ['Shenyang','Huhehaote']));
  cities.push(new City('Haerbin', 605,139, ['Changchun','Huhehaote']));
}

function draw() {
  background(0);
 
 image(img, 23, 6, 760, 570);
   blu=blu+random(-200,200);
  let level = mic.getLevel();
  let dia = map(level, 0.0, 1.0, 0, 2000);
    noStroke();
  
  fill(255,0,0);
  ellipse(width/2, height/2, dia, dia);
  
 
  
  for (let i=0; i < cities.length; i++) {
    cities[i].drawConnections();
  }
  
  for (let i=0; i < cities.length; i++) {
    cities[i].drawCities();
  }
  
  // Draw the clock background
  noStroke();
  fill(100,149,237);
  ellipse(cx, cy, clockDiameter + 15, clockDiameter + 15);
  fill(135,206,250);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
  
  text("Click to start the microphone!", 10, 20);
  text("Volume: " + level, 10, 50);
  text("Shanghai",580,367);

   startingending(580, 367);
  parcel(180, 357);
}


class City {
  constructor(name, x, y, connections) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.connections = connections;
  }

  drawConnections() {
    for (let i=0; i < this.connections.length; i++) {
      let connected_city_name = this.connections[i];
      // find the connection in the list of cities
      for (let j=0; j < cities.length; j++) {
        if (cities[j].name == connected_city_name) {
          stroke('white');
          line(this.x, this.y, cities[j].x, cities[j].y);
        }
      }
    }
  }

  drawCities() {
    noStroke();
    blu=random(0,255);
   
    fill(0,0,blu);
    ellipse(this.x, this.y, 5, 5);
  }
}

function startingending (x,y) {
  fill(0,0,0);
  circle(x,y,1);
  fill(255,255,255);
  circle(x,y,5);  
  fill(255,0,0);
  circle(x,y,7);
  
}

function preload(){
  img = loadImage("asset/bigmap1.png");
}

function parcel(x,y) {
  translate(x,y)
    push();
  noStroke();
  fill(255,0,0);
  circle(0,0,20);
  triangle(-10,2,10,2,0,25);
   fill(255,255,255);
  circle(0,0,10);
  pop();
}