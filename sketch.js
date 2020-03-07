var w;
var h;
var currentplayer 
var x = 'x';
var o = 'o';

function setup() {
  createCanvas(400, 400);
  w = width/3;
  h = height/3;
  //fillCell ();
  // this.cell = ( cell1 || cell2 || cell3 || cell4 || cell5 || cell6 || cell7 || cell8 || cell9 );
}

function draw() {
  background(220);
  strokeWeight(1);

  //row1
   cell1 = rect(0,0, w, h);
   cell2 = rect(w,0, w, h);
   cell3 = rect(w + w, 0, w, h);
  
  //row2
  cell4 = rect( 0, h, w, h);
  cell5 = rect(w, h, w, h);
  cell6 = rect(w +w ,h, w, h);
  
  //row3
  cell7 = rect(0, h + h, w, h);
  cell8 = rect(w, h + h, w, h);
  cell9 = rect(w + w, h + h, w, h);  
  
    this.cell = ( cell1 || cell2 || cell3 || cell4 || cell5 || cell6 || cell7 || cell8 || cell9 );

}

function mousecClicked(fillCell) {
   if (currentplayer === player1)
   {  this.cell == 'X' ;
   } else {
      this.cell == 'O' ;   
   }
  size (32)
  textAlign();

}

function currentplayer() {}


function winstate() {}

function reset() {}
  

  

