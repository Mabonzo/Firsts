/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

background(89,216,255);
var feesh = function(feeshX,feeshY,feeshW,feeshH,feeshColor) {
    noStroke();
    fill(feeshColor);
    ellipse(feeshX,feeshY,feeshW,feeshH);   //feesh body
    var tailW = feeshW/4;   //feesh tail
    var tailH = feeshH/2;
    triangle(feeshX-feeshW/2,feeshY,feeshX-feeshW/2-tailW,
        feeshY-tailH,feeshX-feeshW/2-tailW,feeshY+tailH);
    fill(33, 33, 33);
    ellipse(feeshX+feeshW/4,feeshY,feeshH/5,feeshH/5);  //feesh eye
};
void draw() {
    var x = random(5,395);  //feeshX
    var y = random(5,395);  //feeshY
    var w = random(25,150); //feeshW
    var h = random(25,150); //feeshH
    var c = color(random(0,255),random(0,255),random(0,255));
    feesh(x,y,w,h,c);   //feesh
    stroke(20, 150, 6, 150);    //seaweed :P
    if (mousePressed) {
        beginShape();
        noFill();
        strokeWeight(15);
        bezier(mouseX, 400, mouseX-100, mouseY,
        mouseX+100, 366, mouseX+1, mouseY*0.93);
        endShape();
    }
};