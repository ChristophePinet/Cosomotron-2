var camera; //variable qui définit la webcam
var canvas; //l'endroit où on peut dessiner
var largeur = 1980 //définit la largeur du canvas / image
var hauteur = 1280 //définit la hauteur du canvas / image
var Imagedefond // Définit l'image /vidéo du fond 
var seuil = parseFloat(localStorage.getItem("ValeurSlider")) // Quand distance couleurfond est assez proche, on change l'image
var couleurfond = [parseFloat(localStorage.getItem("couleurfondR")), parseFloat(localStorage.getItem("couleurfondG")), parseFloat(localStorage.getItem("couleurfondB"))]; // Contrôle couleur supprimée
var value = 0
var secondesCR = 5
var listimage = ["Medias/a.jpg", "Medias/b.jpg", "Medias/c.jpg", "Medias/d.jpg", "Medias/e.png"]
var positionlist = 0
var resolution = 1 / 2 // Pour réduire la résolution
var toilevisible = true; // Afficher ou non la fonction etoile
var taille = [] // Tableau de différente taille
var etoileX = []
var etoileY = []
var r1 = 300;
var c = 0.628319;
var rotation = 0;
var imagedefond;
var y = 0


function setup() {
    canvas = createCanvas(); // Creer une zone pour dessiner
    canvas.size(largeur * resolution, hauteur * resolution) //Taille de la zone à dessiner
    Imagedefond = loadImage("Medias/b.jpg") // Integre une video
    //Imagedefond.hide() // Cacher l'image de base
    camera = createCapture(VIDEO); // Active la webcam
    camera.size(largeur * resolution, hauteur * resolution); // Taille de la webcam
    //Imagedefond.stop() // Lance en boucle la vidéo / Stop la video
    camera.hide(); // Supprimer la webcam de base
    frameRate(60); // Changer le framerate (Image par seconde)
    //Imagedefond.loop()

    for (var i = 0; i < 30; i++) { // Créer 10 étoile
        etoileX[i] = random(0, largeur)
        etoileY[i] = random(10, hauteur) // Distance entre les étoiles
        taille[i] = random(0.1, 0.5); // Différente taille des étoiles
        
        // etoileX[i]= i * 100;

    }
    setupbutton() // Lance la fonction nommée


    windowResized() // Lance la fonction nommée

    positionbutton() // Lance la fonction nommée
}




function draw() { // Dessine chaque image
    drawbutton()
    // background(0) // Dessiner le fond
    image(Imagedefond, 0, 0, largeur * resolution, hauteur * resolution) // Dessine l'image / La video
    loadPixels(); // Charge les pixel
    dessinerCamera() // Dessine la webcam
    updatePixels(); // Permet de charger les pixel en mouvement.
    etoile(); // Lance la fonction nommée
    if (toilevisible == true) { // Si toilevisible est vrai, alors on lance la fonction en dessous.

        for (var i = 0; i < 30; i++) { // Dessine les étoiles
            //etoile(etoileX[i],0);
            etoile(etoileX[i], etoileY[i], taille[i]); // Indique leurs positions et leurs tailles

            etoileY[i] += 10 // Vitesse de déplacement
            etoileX[i] += 10

            if (etoileY[i] >= 700) { // Si l'étoile descend tout en bas...
                etoileY[i] = random(-500, 400) // Alors elle retourne en haut
                etoileX[i] = random(-100,500)
            }
        }
     

    }
}

function move() {
    localStorage.setItem("ValeurSlider", "" + seuil) // Enregistre

}

function windowResized() { // Responsive de l'écran. Si il change de taille, le programme s'adapte
    largeur = windowWidth
    hauteur = windowHeight
    canvas.size(largeur * resolution, hauteur * resolution)
    resizeCanvas(windowWidth / 2, windowHeight / 2);
    canvas.canvas.style.width = windowWidth + "px"
    canvas.canvas.style.height = windowHeight + "px"
    camera.size(largeur * resolution, hauteur * resolution)
    positionbutton()

}


function suivant() {
    if (positionlist < listimage.length - 1) {
        positionlist = positionlist + 1
    } else {
        positionlist = 0
    }
    chargerimg()
}

function chargerimg() {
    Imagedefond = loadImage(listimage[positionlist])

}



function distance(r1, g1, b1, r2, g2, b2) { // Calcul la distance entre deux couleurs
    return (Math.abs(r2 - r1) + Math.abs(g2 - g1) + Math.abs(b2 - b1))/4
}


function dessinerCamera() { // affiche la webcam

    if (camera.imageData && camera.width == 0) {
        camera.width = camera.imageData.width
        camera.height = camera.imageData.height
    }
    camera.loadPixels() // Charge les pixel de la webcam si la largeur n'est pas égale à 0


    if (camera.pixels.length) { // Etre sur que la caméra est chargée

        const w = largeur; // Variable raccourcis pour largeur
        const h = hauteur; // Variable raccourcis pour hauteur

        //for (let i = 0; i < w; i++) { // On se balade sur les colonnes
        //for (let j = 0; j < h; j++) { // On se balade sur les lignes

          
        for(let i = 0; i < w; i++){
            
        for (let j = 0; j < h; j++){
            
            const position1dCanvas=(j*w+i)*4
            
            const r = camera.pixels[position1dCanvas + 0];
            const g = camera.pixels[position1dCanvas + 1];
            const b = camera.pixels[position1dCanvas + 2];

            if (distance(r, g, b, couleurfond[0], couleurfond[1], couleurfond[2]) < seuil) { // Si la distance des couleurs est inférieur au seuil, alors...

            } else {
                pixels[position1dCanvas + 0] = r;
                pixels[position1dCanvas + 1] = g;
                pixels[position1dCanvas + 2] = b;

            }
        }
    }
}
    updatePixels()
}