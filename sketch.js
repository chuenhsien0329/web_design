let font;
function preload(){ 
  font = loadFont('云峰林桥体.otf');
  font2 = loadFont('荆南波波黑.otf');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  background('#FFC196');//背景顏色
  print(mouseX,mouseY);

  push();
  fill('#04F304');//Mike
  stroke('#2E8B57');
  strokeWeight(1.6);
  angleMode(DEGREES);
  
  rotate(20);//左手
  ellipse(300,200,30,50);
  rotate(-40);//右手
  ellipse(173,370,30,50);
  
  fill('#FFFAFA');//右角
  rotate(90);
  translate(250,-245);
  beginShape();
  vertex(30,20);
  bezierVertex(80,0,80,75,30,75);
  bezierVertex(50,80,60,25,30,20);
  endShape();
  
  fill('#FFFAFA');//左角
  rotate(250);
  translate(-70,26);
  beginShape();
  vertex(-30,-20);
  bezierVertex(-80,0,-86,-75,-42,-80);
  bezierVertex(-50,-80,-60,-25,-30,-20);
  endShape();
  pop();
  
  push();
  fill('#ADFF2F');//身體
  stroke('#2E8B57');
  strokeWeight(1.6);
  angleMode(DEGREES);
  ellipse(250,250,143,133);
  
  fill('#F8F8FF');//眼睛
  let eyeballX = constrain(mouseX,240,260);
  let eyeballY = constrain(mouseY,248,268);
  stroke('#00868B');
  ellipse(250,257,85,85);
  fill('#76EEC6');
  stroke('#00868B');
  ellipse(eyeballX,eyeballY,49,49);
  fill('#000000');
  stroke('	#1C1C1C');
  let irisX= constrain(mouseX,eyeballX-10,eyeballX+10);
  let irisY= constrain(mouseY,eyeballY-8,eyeballY+8);
  ellipse(irisX,irisY,20,20);
  fill('#FFFFFF');
  stroke('#FFFFFF');
  ellipse(irisX+3,irisY-3,7.5,7);
  pop();
  
  push();
  fill('#FFFAFA');//Mickey
  stroke('#000000');
  strokeWeight(1.6);
  angleMode(DEGREES);
  
  translate(-160,0);
  rotate(20);//左手
  ellipse(300,200,30,50);
  rotate(-40);//右手
  ellipse(173,372,30,50);
  rotate(20);
  fill('#1C1C1C');
  circle(200,185,65);
  circle(300,185,65);
  translate(160,0);
  ellipse(90,250,143,133);//身體
  pop();
  
  push();
  fill('#FFDAB9');
  stroke('#FFDAB9');
  ellipse(73,270,60,90);//米色臉
  ellipse(107,270,60,90);
  ellipse(85,282,70,70);
  ellipse(94,282,70,70);
  ellipse(92,283,70,70);
  translate(360,170);
  rotate(80);
  ellipse(73,270,50,80);
  translate(74,595);
  rotate(-160);
  ellipse(107,270,50,80);
  pop();
  
  push();
  fill('#1C1C1C');
  ellipse(70,270,16,23);//左眼
  ellipse(110,270,16,23);//右眼
  ellipse(90,290,15,10);//鼻子
  pop();
  
  push();
  fill('#FFB90F');//Pooh
  stroke('#B8860B');
  strokeWeight(1.6);
  angleMode(DEGREES);
  
  translate(159,0);
  rotate(20);//左手
  ellipse(300,200,30,50);
  rotate(-40);//右手
  ellipse(173,372,30,50);
  rotate(20);
  fill('#FFD700');
  ellipse(200,195,33,43);//左耳
  ellipse(310,195,33,43);//右耳
  translate(-159,0);
  ellipse(410,250,143,133);//身體
  pop();
  
  push();
  fill('#FFD700');
  stroke('#704120');
  strokeWeight(3);
  arc(427,240,40,40,280,-10);//右眉
  arc(393,240,40,40,190,260);//左眉
  arc(411,292,50,50,-116,-64);//皺鼻
  fill('#704120');
  ellipse(435,263,11,11);//右眼
  ellipse(386,263,11,11);//左眼
  triangle(406,280,417,280,411.5,286);//鼻子
  arc(411.5,288,23,23,-125,-55);
  pop();
  
  push();
  textFont(font);
  textSize(35);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);//TOP BOTTOM BASELINE;
  text('MICKEY',88,340);
  text('MIKE',248,340);
  text('POOH',410,340);
  fill('#EE00EE');
  stroke('#9400D3');
  strokeWeight(5);
  textFont(font2);
  textSize(50);
  text('TSUM TSUM',250,100);
  pop();
}