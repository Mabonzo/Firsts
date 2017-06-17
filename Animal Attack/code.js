/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

var speed = 3;                  //control the starting speed
var frequency = 1;              //control the starting frequency
var amplitude = 20;             //control the starting amplitude


var centerX = -250;
var centerY = 200;
var bodyW = 322;
var bodyH = 100;
var finH = 200;
var finW = 75;
var finCutH = 60;
var finCutW = 50;
var straight = 180 * Math.PI / 180.0;             //(degrees)
var angle = 20 * Math.PI / 180.0;                 //(degrees)
var eyeSize = 20;
void draw() {
    if (keyPressed && key.code===100) {speed+=0.2;}         //control the speed
    if (keyPressed && key.code===97) {speed-=0.2;}
    if (keyPressed && key.code===119) {amplitude+=0.7;}        //control the amplitude
    if (keyPressed && key.code===115) {amplitude-=0.7;}
    if (keyPressed && key.code===113) {frequency/=1.01;}      //control the frequency
    if (keyPressed && key.code===101) {frequency*=1.01;}
    noStroke();
    background(20,20,255);
    fill(67,181,162);
    ellipse(centerX,centerY,bodyW,bodyH);                   //body
    ellipse(centerX+39,centerY+25,finW,finH-60);            //left fin
    fill(20,20,255);
    ellipse(centerX+26,centerY+75,finCutW/1.6,finCutH/1.5);
    fill(67,181,162);
    ellipse(centerX-10,centerY,finW,finH);          //right & dorsal fin
    fill(20,20,255);
    ellipse(centerX-40,centerY-75,finCutW,finCutH);
    ellipse(centerX-40,centerY+75,finCutW,finCutH);
    fill(70,190,170);
    arc(centerX,centerY,bodyW,bodyH,angle,straight-angle);  //belly
    fill(67,181,162);                                       //tail
    ellipse(centerX-174,centerY,100,100);
    fill(20,20,255);
    ellipse(centerX-192,centerY,100-25,100-17);
    fill(255,255,255);                                      //eye
    ellipse(centerX+100,centerY-10,eyeSize,eyeSize);
    fill(255, 0, 0);
    ellipse(centerX+100,centerY-10,eyeSize/2.85714285,eyeSize/1.3);
    noFill();                                              //mouth
    stroke(255,0,0);
    arc(centerX+109,centerY+22,50,25,70 * Math.PI / 180.0,160 * Math.PI / 180.0);
    centerX+=speed;                                        //animation!!
    if (centerX>620) {centerX=-200;}
    if (centerX<-220) {centerX=600;}
    centerY=centerY+frequency;
    if (centerY>abs(amplitude)+200) {frequency=-abs(frequency);}
    if (centerY<-abs(amplitude)+200) {frequency=abs(frequency);}
    if (amplitude<0) {amplitude=0;}
    if (amplitude>300) {amplitude=300;}
};
