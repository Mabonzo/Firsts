/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

background(0,190,255);
var timer=1;
void draw(){
    var a=random(0,255);
    var b=random(0,255);
    var c=random(0,255);
    var x=random(0,400);
    var y=random(0,400);
    var m=random(0,400);
    var n=random(0,400);
    fill(a,b,c);
    ellipse(x,y,5,5);
    ellipse(m,n,5,5);
    if(timer>10000){background(0,190,255);timer=1;}
    timer++;
};
