
let a = 0.0;
let s = 0.0;
let t=0.0;
function preload(){
    let style = document.createElement('link')
    style.rel="stylesheet"
    style.href = 'https://fonts.googleapis.com/css?family=Gaegu'
    document.getElementsByTagName('head')[0].appendChild(style) 
}

function setup() { 

  let canvas = createCanvas(800, 800);
  canvas.parent("my-container");

    // 设置字体名字
    textFont("Gaegu"); 
    // 设置填充颜色
  
    fill(255,255,255);
    // 设置框线rgba(38,29,224,0.25)
  strokeWeight(4);
   stroke(225,225,255);
}
function draw() {  
   a = a + 0.02;
  s = cos(a) ;
   
  //Translate our rectangle from the origin to the middle of
  //the canvas, then scale it with 's' 
   
   
   
  // 设置字体大小
  
   
  background(0);
  push();
  textFont("Gaegu"); 
    // 设置填充颜色
  
    fill(0,255,0);
    // 设置框线rgba(38,29,224,0.25)
  strokeWeight(4);
   stroke(255,0,0);
  textSize(72);  
    text("Screaming", width*0.3, height*0.3+60); 
  textSize(46);  
  text("for Getting Your Package", width*0.3,width*0.3+120);
  pop();
  
  translate(width *0.3, height*0.3);
  scale(s);
  translate(0,0);
  scale(s);
  
  
    // 设置字体大小
    textSize(72);  
    text("Screaming", 0, 60); 
   
   
  // 设置字体大小
  
    textSize(46);  
    text("for Getting Your Package", 0,120); 
}