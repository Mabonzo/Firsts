/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

var answer = round(random(1, 5));               //*randomizer
var click = function() {answer = round(random(1, 5));}; //*
void draw() {
    if (mousePressed) {click();}              //click, don't restart*
    var a=255;var b=255;var c=255;              //**determines colors
    var eightBall = function() {                //****eightball
        var d=150-a;var e=150-b;var f=150-c;    //determines font color
        fill(0, 0, 0);
        ellipse(200, 200, 375, 375);
        fill(a, b, c);
        triangle(200, 104, 280, 280, 120, 280);
        fill(d, e, f);
    };
    if (answer === 1) {                         //options
        var a=71;var b=203;var c=255;           //**
        eightBall();                            //***
        text("MAYBE", 181, 200);                //text
        text("SOMEDAY", 170, 230); 
    }
    else if (answer === 2) {
        var a=288;var b=-139;var c=106;
        eightBall();
        text("PERHAPS", 172, 200);
        text("NEVER", 176, 230); 
    }
    else if (answer === 3) {
        var a=0;var b=180;var c=0;
        eightBall();
        text("ONLY ON", 173, 200);
        text("A WEDNESDAY", 157, 230); 
    }
    else if (answer === 4) {
        var a=273;var b=257;var c=-233;
        eightBall();
        text("PROBABLY", 170, 200);
        text("IN ANOTHER", 164, 230);
        text("DIMENSION",167,260);
    }
    else if (answer === 5) {
        var a=150;var b=0;var c=0;
        eightBall();
        text("USE YOUR", 171, 200);
        text("IMAGINATION", 162, 229); 
    }
};