let cities = [];

function setup() {
  createCanvas(800, 580);

  cities.push(new City('Shanghai', 580, 367, ['Hangzhou', 'Nanjing']));
  cities.push(new City('Hangzhou', 564, 382, ['Shanghai', 'Nanjing']));
  cities.push(new City('Nanjing', 544, 359, ['Shanghai', 'Hangzhou']));
  cities.push(new City('Hefei', 524, 360, ['Hangzhou','Nanchang', 'Nanjing']));
  cities.push(new City('Nanchang', 510, 410, ['Hangzhou','Fuzhou']));
  cities.push(new City('Guangzhou', 478,496, ['Fuzhou','Nanchang']));
  cities.push(new City('Fuzhou', 559,447, ['Hangzhou', 'Guangzhou']));
  cities.push(new City('Taibei', 592,459, ['Fuzhou']));
  cities.push(new City('Nanning', 407,500, ['Guangzhou']));
   cities.push(new City('Haikou', 436,545, ['Nanning','Guangzhou']));
  cities.push(new City('Changsha', 470,422, ['Nanning','Nanchang','Guangzhou']));
  cities.push(new City('Wuhan', 486,383, ['Changsha','Nanchang','Hefei']));
  cities.push(new City('Jinan', 515, 290, ['Nanjing','Shanghai','Hefei']));
  cities.push(new City('Tianjin', 515,250, ['Jinan']));
  cities.push(new City('Zhengzhou', 476,321, ['Wuhan','Jinan','Hefei']));
    cities.push(new City('Shijiazhuang', 484, 272, ['Tianjin','Jinan','Zhengzhou']));
  cities.push(new City('Guiyang', 385,446, ['Nanning','Changsha']));
  cities.push(new City('Chongqing', 383,401, ['Guiyang','Changsha','Wuhan']));
  cities.push(new City('Chengdu', 351, 381, ['Chongqing']));
  cities.push(new City('Kunming', 330, 467, ['Nanning','Guiyang','Chengdu']));
  cities.push(new City('Xian', 416, 329, ['Chengdu','Chongqing','Wuhan','Zhengzhou']));
  cities.push(new City('Lasa', 180, 377, ['Kunming','Chengdu']));
  cities.push(new City('Taiyuan', 460, 274, ['Shijiazhuang','Zhengzhou','Xian']));
  cities.push(new City('Xining', 326, 290, ['Lasa','Chengdu']));
  cities.push(new City('Lanzhou', 355, 300, ['Xining','Chengdu','Xian']));
  cities.push(new City('Wulumuqi', 182, 157, ['Lanzhou','Lasa','Xining','Yinchuan']));
  cities.push(new City('Yinchuan', 385,265 ,['Lanzhou','Taiyuan']));
  cities.push(new City('Huhehaote', 449,231, ['Wulumuqi','Yinchuan','Taiyuan','Beijing']));
  cities.push(new City('Beijing', 503,241, ['Shijiazhuang','Tianjin']));
  cities.push(new City('Shenyang', 583,202, ['Beijing','Tianjin']));
  cities.push(new City('Changchun', 597,167, ['Shenyang','Huhehaote']));
  cities.push(new City('Haerbin', 605,139, ['Changchun','Huhehaote']));
}

function draw() {
  background(0);
 image(img, 0, 0, 800, 580);
  if (mouseIsPressed) {
    console.log(mouseX,mouseY);
  }
  for (let i=0; i < cities.length; i++) {
    cities[i].drawConnections();
  }
  
  for (let i=0; i < cities.length; i++) {
    cities[i].drawCities();
  }
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
          stroke('grey');
          line(this.x, this.y, cities[j].x, cities[j].y);
        }
      }
    }
  }

  drawCities() {
    noStroke();
    fill('blue');
    ellipse(this.x, this.y, 5, 5);
  }
}

function preload(){
  img = loadImage("asset/bigmap0.jpg");
}