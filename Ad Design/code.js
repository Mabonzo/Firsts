/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

var x1 = 10;
var x2 = 150;
var x3 = 290;
var y = 1;
var c = 55;
var z = 50;
var a = 1;
var b = 1;
var timer = 1;
background(100,100,100);
var F = createFont("cursive");
void draw() {
    if (timer===300) {
        fill(0,0,0);
        stroke(100, 10, 100);
        ellipse(200,97,4000,70);
    }
    if (timer===720) {
        fill(0,0,0);
        stroke(100, 10, 100);
        ellipse(200,226,4000,21);
        ellipse(200,256,4000,21);
    }
    fill(145,98,98);
    stroke(56,42,49);
    quad(x1,y+c,x1+z,y+c-z,x1+z*2,y+c,x1+z,y+c+z);
    quad(x2,y+c,x2+z,y+c-z,x2+z*2,y+c,x2+z,y+c+z);
    quad(x3,y+c,x3+z,y+c-z,x3+z*2,y+c,x3+z,y+c+z);
    y*=1.007;
    fill(34, 122, 122);
    textFont(F);
    textSize(70);
    if (timer<1001) {
        text("Metal!", 96, 120);
        textSize(14);
        text("SO SOFT! DON'T GO TO SLEEP WITHOUT ONE!", 33, 232);
        text("DELICIOUS! HEAT IT UP AND DRINK!", 70, 261);
    }
    timer++;
    if (timer>1000) {
        var q = random(0,255);
        var w = random(0,255);
        var e = random(0,255);
        fill(q, w, e);
        rotate(timer*70);
        ellipse(a,a,a/2,a/2);
        a=a+b;
        if (a<200) {b+=1;}
        if (a>200) {b-=1;}
    }
};