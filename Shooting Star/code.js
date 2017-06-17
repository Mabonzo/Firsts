/**********************************************************************************
*   This code is based on a program I wrote on Khan Academy.
*   It has been modified to work on your own site.
*   You can see the original at http://www.khanacademy.org/cs/network/1058402007
***********************************************************************************/

// Make sure your code includes this line to setup a 400x400 pixel canvas
void setup() { 
  size(400, 400); 
}

var timer1=0;                           //timer for fade out
var timer2=0;
var x1=1;                               //star on left
var y1=399;
var x2=399;                             //star on right
var y2=399;
var x3=15;                              //explosion shockwave
var y3=x3;
var quadPositive=244;                   //explosion peak thingies
var quadNegative=224;
var x4=15;                              //explosion fireball
/*var tree1=getImage("cute/TreeShort");   //trees
var tree2=getImage("cute/TreeTall");
var tree3=getImage("cute/TreeUgly");*/		//Idk how to get images 
void draw() {
    background(29,40,115);              //sky
    fill(255,242,0);
    if (x1<201) {ellipse(x1,y1,10,10);} //star on left
    if (x2>199) {ellipse(x2,y2,10,10);} //star on right
    noStroke();                         //ground
    fill(10, 61, 13);
    ellipse(200,400,500,70);
    /*image(tree1,109,330,31,50);         //trees	
    image(tree2,312,317,41,78);
    image(tree3,216,328,41,54);
    image(tree3,55,331,33,58);*/
    if (x1>200) {                       //start explosion
        fill(255,255,255);              //explosion peak thingies
        quad(185,234,215,234,200,quadNegative,200,quadPositive);
        {fill(255,111,0);}              //explosion fireball
        ellipse(200,234,x4,x4);
        fill(250,27,27);                //explosion shockwave
        ellipse(200,234,x3,y3);
    }
    x1*=1.04;x1+=1;                     //star on left animation
    y1/=1.01;
    x2=400-x1;                          //star on right animation
    y2/=1.01;
    x3*=1.01;                           //shockwave animation
    if (x3>4000) {y3/=1.1;}
    quadPositive-=0.4;                  //peak thingies animation
    quadNegative+=0.4;
    x4*=1.007;                          //fireball animation
    if (timer1>600) {                   //fadeout animation
        background(255-timer2,111-timer2,0-timer2);
        timer2+=2;
    }
    timer1=timer1+1;
	if (mousePressed) {				//Resets on click
	timer1=0;                           //timer for fade out
	timer2=0;
	x1=1;                               //star on left
	y1=399;
	x2=399;                             //star on right
	y2=399;
	x3=15;                              //explosion shockwave
	y3=x3;
	quadPositive=244;                   //explosion peak thingies
	quadNegative=224;
	x4=15;}
};
