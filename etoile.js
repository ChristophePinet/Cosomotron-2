var etoileX = 0
var etoileY = []
var r1 = 300;
var c = 0.628319;
var rotation = 0;
var imagedefond;
var y = 0


//function setup(){
//    createCanvas(720, 720);  
//      
//}

//function draw(){
//    
//    background(0)
//    
//    
//    
//}

//function etoile(posX, posY) {
//    fill(random(255), random(255), random(255));
//    beginShape();
//    vertex(posX + 10, posY);
//    vertex(posX, posY - 40);
//    vertex(posX - 10, posY);
//    vertex(posX - 40, posY);
//    vertex(posX - 20, posY + 20);
//    vertex(posX - 30, posY + 50);
//    vertex(posX, posY + 30);
//    vertex(posX + 30, posY + 50);
//    vertex(posX + 20, posY + 20);
//    vertex(posX + 40, posY);
//    vertex(posX + 10, posY);
//    endShape();
//}

function etoile(posX, posY, taille) {
fill(random(255), random(255), random(255))
beginShape();
        vertex(posX+25*taille, posY+60*taille );
        vertex(posX+90*taille, posY+60*taille );
        vertex(posX+40*taille, posY+100*taille);
        vertex(posX+60*taille, posY+170*taille);
        vertex(posX+ 0*taille, posY+130*taille);
        vertex(posX-60*taille, posY+170*taille);
        vertex(posX-40*taille, posY+100*taille);
        vertex(posX-90*taille, posY+60*taille );
        vertex(posX-25*taille, posY+60*taille );
        vertex(posX+0 *taille, posY+0*taille  );
    endShape()
}