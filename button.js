
var buttonhide = true
var boutonvisible
var button
var button1
var secondesCR=5
var character =''+secondesCR
var textsize = '2rem'
var cote = largeur/20*resolution
var toilevisible = true

 function setupbutton() { 
 
seuilSlider = createSlider(0,255,seuil) // Creer un slider 
  seuilSlider.position(100, 40) //Positionne le slider
  pixelDensity(1) // Densité du pixel

  button = createImg('Photo.png', 'smile')
  button.mouseClicked(comptearebours)
  button.style('font-size', textsize)

  button2 = createImg('Ninja.png', 'hide')
  button2.mouseClicked(hideshow)
  button2.style('font-size', textsize)
  
  button1 = createImg('Flèche.png','next')
  button1.mouseClicked(suivant)
  button1.style('font-size', textsize)

  //button3 = createImg('','Grandecran')
  //button3.mouseClicked(grandecran)
  //button3.style('font-size', textsize)

  //button4 = createImg('SauveColor')
  //button4.mouseClicked(sauveCouleur);
  //button4.style('font-size', textsize)

  button5 = createSelect()
  button5.option ('HD')
  button5.option ('Simple')
  //button5.changed (changeResolution())
  
  button6 = createButton ('Etoiiile')
  button6.mouseClicked(toitoile)
//  button.style('font-size', textsize)

 }



 function positionbutton () {

  button.size(cote,cote)
  button.position(largeur/2 ,hauteur - cote)
  

  button1.size(cote,cote)
  button1.position(largeur - (largeur / 10) ,hauteur/2)
  

  button2.size(cote,cote)
  button2.position(0,hauteur - cote)
   
  //button3.size(largeur/5,50)
  //button3.position(0, hauteur/2)
  

 // button4.size(largeur/5,50)
  //button4.position(0, hauteur/2 + 50);

  button5.size(150,150)
  button5.position(200,200)
  
     
  //button6.size(150,150)
  button6.position(400,400)

 }

function changeResolution(){
var choix = buttonRO.value()
if(choix=="Simple"){
    reso=0.5
}
else if (choix=="HD"){
    reso=1
}
windowResized()
}


    
function drawbutton() { // Dessine chaque image
 
  seuil = seuilSlider.value() // Modifie le seuil avec le slider
  seuilSlider.mouseReleased(move)
}
  if(secondesCR!=5 && secondesCR!=1){
   
  
  text(character,largeur-25,25)

 }

function hideshow(){
  if(buttonhide==true){
     button.hide()
     button1.hide()
     seuilSlider.hide()
    // button3.hide()
   //  button4.hide()
      button5.hide()
      button6.hide()
     buttonhide=false
   
    
  }
  else{ 
button.show()
button1.show()
//button3.show()
//button4.show()
seuilSlider.show()
button5.show()
button6.show()
buttonhide=true
  }   
}


function grandecran() {
if (button3.mouseClicked) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}


function keyTyped() { // Permet de réagir quand on appuie sur le clavier
  if (key == 'b') { // Spécifie la touche
    comptearebours(); // applique la fonction Save
  }
 }

function Save(){ // Fonction sauvegarde
  saveCanvas(canvas, 'myCanvas', 'jpg')
} // Sauvegarde


function sauveCouleur() {
  localStorage.setItem("couleurfondR",""+couleurfond[0]);
  localStorage.setItem("couleurfondG",""+couleurfond[1]); 
  localStorage.setItem("couleurfondB",""+couleurfond[2]); 
}

function mouseClicked(e) { // Reagit au clic
  if(e.srcElement==canvas.canvas){ // Si le clic se situe dans la zone dessinable
var position1d = (Math.floor(mouseY)*largeur*resolution+Math.floor(mouseX))*4 // Localise le clic
  couleurfond[0]=camera.pixels [position1d+0]
  couleurfond[1]=camera.pixels [position1d+1]
  couleurfond[2]=camera.pixels [position1d+2]
  } 
  return false; 
  
 

}


function toitoile() {
    if(toilevisible==false) {
        toilevisible = true
       
    }

    else {
        toilevisible = false

    }
}

function comptearebours(){
  secondesCR=secondesCR-1
  if(secondesCR==0){
    secondesCR=5
    Save()
  }
  else{
    setTimeout(comptearebours,1000)
  }
}
