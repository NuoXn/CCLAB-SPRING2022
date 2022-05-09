let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

let mic;
let avg_fast = 0.0;
let avg_slow = 0.0;
let level;
let cities = [];

let cityred;
let citygreen;
let cityblue;

let starting = false;
let index;
let parcel1;
function setup() {
  let canvas = createCanvas(800,580);
  canvas.parent("my-container");
  

  //https://editor.p5js.org/gohai/sketches/th7T7cyXC
  mic = new p5.AudioIn();
  mic.start();
  //https://p5js.org/examples/input-clock.html
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71 * 0.25;
  minutesRadius = radius * 0.6 * 0.25;
  hoursRadius = radius * 0.5 * 0.25;
  clockDiameter = radius * 1.7 * 0.25;

  cx = 700;
  cy = 470;

  cities.push(
    new City(
      "Wulumuqi",
      182,
      157,
      ["Lanzhou", "Lasa", "Xining", "Yinchuan", "Huhehaote"],
      0
    )
  );
  cities.push(new City("Shanghai", 580, 367, ["Shanghai"], 1));
  cities.push(new City("Hangzhou", 564, 382, ["Shanghai", "Nanjing"], 2));
  cities.push(new City("Nanjing", 544, 359, ["Shanghai", "Hangzhou"], 3));
  cities.push(new City("Hefei", 524, 360, ["Hangzhou", "Nanjing"], 4));
  cities.push(new City("Nanchang", 510, 410, ["Hangzhou", "Hefei"], 5));
  cities.push(
    new City("Guangzhou", 478, 496, ["Fuzhou", "Nanchang", "Changsha"], 6)
  );
  cities.push(new City("Fuzhou", 559, 447, ["Hangzhou", "Nanchang"], 7));
  cities.push(new City("Taibei", 592, 459, ["Fuzhou", "Hangzhou"], 8));
  cities.push(
    new City(
      "Nanning",
      407,
      500,
      ["Guangzhou", "Haikou", "Changsha", "Guiyang", "Kunming"],
      9
    )
  );
  cities.push(new City("Haikou", 436, 545, ["Nanning", "Guangzhou"], 10));
  cities.push(
    new City(
      "Changsha",
      470,
      422,
      ["Nanning", "Nanchang", "Guangzhou", "Wuhan", "Chongqing", "Guiyang"],
      11
    )
  );
  cities.push(
    new City(
      "Wuhan",
      486,
      383,
      ["Changsha", "Nanchang", "Hefei", "Zhengzhou", "Xian"],
      12
    )
  );
  cities.push(
    new City("Jinan", 515, 290, ["Nanjing", "Shanghai", "Hefei"], 13)
  );
  cities.push(new City("Tianjin", 515, 250, ["Jinan"], 14));
  cities.push(new City("Zhengzhou", 476, 321, ["Wuhan", "Jinan", "Hefei"], 15));
  cities.push(
    new City("Shijiazhuang", 484, 272, ["Tianjin", "Jinan", "Zhengzhou"], 16)
  );
  cities.push(new City("Guiyang", 385, 446, ["Nanning", "Changsha"], 17));
  cities.push(
    new City("Chongqing", 383, 401, ["Guiyang", "Changsha", "Wuhan"], 18)
  );
  cities.push(new City("Chengdu", 351, 381, ["Chongqing"], 19));
  cities.push(
    new City("Kunming", 330, 467, ["Nanning", "Guiyang", "Chengdu"], 20)
  );
  cities.push(
    new City(
      "Xian",
      416,
      329,
      ["Chengdu", "Chongqing", "Wuhan", "Zhengzhou"],
      21
    )
  );
  cities.push(
    new City("Lasa", 180, 377, ["Kunming", "Chengdu", "Xining", "Wulumuqi"], 22)
  );
  cities.push(
    new City("Taiyuan", 460, 274, ["Shijiazhuang", "Zhengzhou", "Xian"], 23)
  );
  cities.push(
    new City(
      "Xining",
      326,
      290,
      ["Lasa", "Wulumuqi", "Chongqing", "Chengdu", "Lanzhou"],
      24
    )
  );
  cities.push(
    new City(
      "Lanzhou",
      355,
      300,
      ["Xining", "Chengdu", "Xian", "Yinchuan", "Wulumuqi"],
      25
    )
  );

  cities.push(
    new City(
      "Yinchuan",
      385,
      265,
      ["Lanzhou", "Taiyuan", "Wulumuqi", "Taiyuan", "Huhehaote"],
      26
    )
  );
  cities.push(
    new City(
      "Huhehaote",
      449,
      231,
      ["Wulumuqi", "Yinchuan", "Taiyuan", "Beijing"],
      27
    )
  );
  cities.push(new City("Beijing", 503, 241, ["Shijiazhuang", "Tianjin"], 28));
  cities.push(new City("Shenyang", 583, 202, ["Beijing", "Tianjin"], 29));
  cities.push(new City("Changchun", 597, 167, ["Shenyang", "Huhehaote"], 30));
  cities.push(new City("Haerbin", 605, 139, ["Changchun", "Huhehaote"], 31));
}

function draw() {
  background(0);
  push();
  fill(255, 255, 255);
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }

  pop();
  image(img2, 600, 190, 207.6, 168.8);
  image(img, 23, 6, 760, 570);

  level = mic.getLevel();
  let dia = map(level, 0.0, 1.0, 0, 1000);

  // calculate an average of the level that is less "jumpy"
  avg_fast = avg_fast * 0.9 + level * 0.1;
  // and one that is even less jumpy
  avg_slow = avg_slow * 0.99 + level * 0.01;

  noStroke();

  fill(255, 0, 0);
  // ellipse(width / 2, height / 2, dia, dia);

  for (let i = 0; i < cities.length; i++) {
    cities[i].drawConnections();
  }

  for (let i = 0; i < cities.length; i++) {
    cities[i].drawCities(i);
    cities[i].checkCollision();
  }

  // Draw the clock background
  noStroke();
  fill(100, 149, 237);
  ellipse(cx, cy, clockDiameter + 15, clockDiameter + 15);
  fill(135, 206, 250);
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

  startingending(580, 367);
  destination(580, 367);
  push();
  translate(598, 367);
  scale(map(sin(frameCount) * 0.04, -1, 1, 1, 1.5));
  text("Shanghai", 0, 0);
  pop();
  if (starting) {
    //print(cities[index].x, cities[index].y);
  }
  if (parcel1 != null) {
    parcel1.drawparcel();

    parcel1.moveparcel();
  }
 
}

class City {
  constructor(name, x, y, connections, currentindex) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.connections = connections;
    this.currentindex = currentindex;
    this.conCityIndex = [];
    this.transparency = random(70, 150);
    this.citydia = 0;
    this.citycase = 0;
  }

  drawConnections() {
    for (let i = 0; i < this.connections.length; i++) {
      let connected_city_name = this.connections[i];
      // find the connection in the list of cities
      for (let j = 0; j < cities.length; j++) {
        if (cities[j].name == connected_city_name) {
          stroke(255, 255, 255, this.transparency);
          line(this.x, this.y, cities[j].x, cities[j].y);
        }
      }
    }
  }
  searchconnection() {
    for (let i = 0; i < this.connections.length; i++) {
      let choosecity = random(this.connections);
      // find the connection in the list of cities
      for (let j = 0; j < cities.length; j++) {
        if (cities[j].name == choosecity) {
          parcel1.dx = cities[j].x;
          parcel1.dy = cities[j].y;
        }
      }
    }
  }
  drawCities(index0) {
    let noisePos = frameCount * 0.00001 * (index0 + 4);
    noStroke();
    cityred = map(noise(noisePos), 0, 1, 0, 255);
    citygreen = map(noise(noisePos), 0, 1, 0, 255);
    cityblue = map(noise(noisePos), 0, 1, 150, 255);
    let sinR = sin(cityred);
    let sinG = sin(citygreen);
    let sinB = sin(cityblue);
    let r = map(sinR, -1, 1, 255, 0);
    let g = map(sinB, -1, 1, 255, 0);
    if (-1 < sinG < 0) {
      g = map(sinG, -1, 0, 0, 255);
    } else if (0 < sinG < 1) {
      g = map(sinG, 0, 1, 0, 255);
    }
    let b = map(sinB, -1, 1, 0, 255);
    this.citydia = map(r, 255, 0, 25, 5);
    fill(r, g, 255, map(this.citydia, 5, 15, 190, 225));
    ellipse(this.x, this.y, this.citydia, this.citydia);
    this.citycase = map(this.citydia, 5, 25, 0, 2000);
  }

  checkCollision() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d <= 10 && !starting && mouseIsPressed) {
      index = this.currentindex;
      starting = true;
      parcel1 = new Parcel(this.x, this.y, this.name);
      cities[index].searchconnection();
    }
  }
}

function startingending(x, y) {
  fill(255, 0, 0);
  circle(x, y, 25);
  fill(255, 255, 255);
  circle(x, y, map(sin(frameCount) * 0.05, -1, 1, 8, 14));
  fill(255, 0, 0);
  circle(x, y, 5);
}
function next(x, y) {
  fill(255, 255, 255, 200);
  circle(x, y, map(sin(frameCount) * 0.05, -1, 1, 5, 7));
}
function destination(x, y) {
  push();
  translate(x, y - 27);
  scale(map(sin(frameCount) * 0.1, -1, 1, 1, 1.4));
  noStroke();
  fill(255, 0, 0);
  circle(0, 0, 20);
  triangle(-10, 2, 10, 2, 0, 25);
  fill(255, 255, 255);
  circle(0, 0, 10);
  pop();
}

function preload() {
  img = loadImage("asset/bigmap1.png");
  img1 = loadImage("asset/parcel.png");
  img2 = loadImage("asset/Tracking your parcel.png");
}

class Parcel {
  constructor(x, y, startCity) {
    this.x = x; // where the parcel is right now
    this.y = y;

    this.route = planShortestRoute(startCity, "Shanghai"); // our route
    //console.log(this.route);

    this.curCityIndex = 0; // which index the current city has
    this.curCity = findCity(this.route[this.curCityIndex]);
    this.nextCity = findCity(this.route[this.curCityIndex + 1]);
    this.process = 0; // 0..1 (where we are between cities)

    this.dist = dist(this.x, this.y, this.nextCity.x, this.nextCity.y);
    this.blocked = true;
  }

  drawparcel() {
    push();
    translate(this.x, this.y);
    scale(map(avg_fast, 0.0, 1.0, 0.8, 3));
    image(img1, -15, -15, 40, 30);
    pop();
  }
  moveparcel() {
   level = mic.getLevel();
    this.x = lerp(this.curCity.x, this.nextCity.x, this.process);
    this.y = lerp(this.curCity.y, this.nextCity.y, this.process);
    //startending(this.nextCity.x, this.nextCity.y);
    for (let i = 0; i < this.route.length - 2; i++) {
      push();
      fill(83, 243, 219, 255);
      line(this.curCity.x, this.curCity.y, this.x, this.y);
      pop();
    }
    
    if (1 <= this.process) {
      
      let diacity = this.nextCity.citydia;
     
      if (diacity > 8) {
        noStroke();
        ellipse(width * 0.5, height * 0.5, map(level, 0.0, 1.0, 0, 1000));
        this.blocked = false;
        if (level > 0.5) {
          if (this.curCityIndex < this.route.length - 2) {
            this.curCityIndex++;
            this.curCity = findCity(this.route[this.curCityIndex]);
            this.nextCity = findCity(this.route[this.curCityIndex + 1]);
            this.dist = dist(this.x, this.y, this.nextCity.x, this.nextCity.y);
            this.process = 0;
            this.blocked = true;
          }
        }
      } 
      
      else if (diacity <= 8 &&"this.blocked==true" ) {
        if (this.curCityIndex < this.route.length - 2) {
          this.curCityIndex++;
          this.curCity = findCity(this.route[this.curCityIndex]);
          this.nextCity = findCity(this.route[this.curCityIndex + 1]);
          this.dist = dist(this.x, this.y, this.nextCity.x, this.nextCity.y);
          
        }
        this.process = 0;
      }
    } 
    
    
    else {
      this.process = this.process + (1 / this.dist) * 0.35;
      next(this.nextCity.x, this.nextCity.y);

      push();
      fill(255, 255, 255);
      noStroke();
      textStyle(BOLD);
      textSize(10);
      text(this.curCity.name, 695, 298);
      text(this.nextCity.name, 675, 310);
      pop;
    }
  }
}

function findCity(name) {
  for (let i = 0; i < cities.length; i++) {
    if (name == cities[i].name) {
      return cities[i];
    }
  }
  //console.log("Did not find city " + name);
}

function planRoute(from, to) {
  let route = [];

  // starting point
  current = findCity(from);
  route.push(from);
  //console.log('Started in ' + from);

  // this is to prevent going in circles
  let prev_city = "";

  while (current.name != to) {
    // find a random city to go to
    next_city = random(current.connections);
    if (next_city != prev_city) {
      prev_city = current.name;
      current = findCity(next_city);
      route.push(next_city);
      // console.log('Going to ' + next_city);
    }
  }

  //console.log('Arrived');
  return route;
}

function planShortestRoute(from, to) {
  let shortest_route = [];

  for (let tries = 0; tries < 100; tries++) {
    let possible_route = planRoute(from, to);
    if (
      shortest_route.length == 0 ||
      possible_route.length < shortest_route.length
    ) {
      shortest_route = possible_route;
      //console.log('Picking ', shortest_route);
    }
  }

  return shortest_route;
}
