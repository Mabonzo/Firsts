/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}
void draw() {
background(186,145,20);
stroke(1,1,1);
fill(255,255,255);
ellipse(200,200,350,350);
ellipse(200,200,300,300); 
/*					NOTE I don't know how to use an image :(
var brocolli = getImage("cute/TreeUgly");
image(brocolli,150,2);
image(brocolli,127,84);
image(brocolli,190,75);
image(brocolli,79,159);
image(brocolli,233,134);
image(brocolli,78,90);
image(brocolli,111,47);
image(brocolli,136,176);
image(brocolli,198,33);
image(brocolli,219,86);
image(brocolli,122,125);
image(brocolli,174,149);
*/
fill(0,0,0);
rotate(45 * Math.PI / 180.0);
rect(151,23,10,10);         //pepper! :-/
rect(400,45,10,10);
rect(241,45,10,10);
rect(287,-48,10,10);
rect(240,-134,10,10);
stroke(56, 53, 56);
ellipse(324,10,10,10);
ellipse(293,115,10,10);
ellipse(271,-74,10,10);
ellipse(402,-60,10,10);
noStroke();
triangle(180,-9,190,-5,188,-14);
}