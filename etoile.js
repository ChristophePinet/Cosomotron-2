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