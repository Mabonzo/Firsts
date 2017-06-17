/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

background(103, 181, 250);
void draw() {
	strokeWeight(1);
	stroke(0,0,0);
	fill(117, 113, 106);        //building
	rect(50,50,300,320);
    strokeWeight(1);
    stroke(0, 0, 0);
    var e=pmouseY*3;
    var r=pmouseX*0.45;
    for(var w=0;w<15;w++) {
    for(var q=0;q<14;q++) {
    fill(r+e%10,r+ e%100,r+ e%100);
    rect(63.5+20*q,60+20*w,10,10);
    fill(0,0,0);
    rect(74+240*q,330+80*w,10,25);
    e+=0.7;
    }}
fill(120, 80, 19);          //ground
noStroke();
rect(0,360,399,40);
stroke(44, 184, 17);
strokeWeight(7);
line(0,360,399,360);
};