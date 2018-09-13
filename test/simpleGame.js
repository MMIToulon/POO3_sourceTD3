var zone_question = document.getElementById("question").firstElementChild;
var zone_image = document.getElementById("image");
var zone_score = document.getElementById("score");

var	nom1 = "Migliaccio";
var prenom1 = 'Damien';
var photo1 = 'images/500px/MIGLIACCIODamien_neutre.jpg';

var nom2 = "Ardid";
var	prenom2 = 'Julien';
var	photo2 = 'images/500px/ARDIDJulien_neutre.jpg';

var	nom3 = "Garcia";
var prenom3 = 'Leo';
var	photo3 = 'images/500px/GARCIALeo_neutre.jpg';

var	nom4 = "Borrelli";
var prenom4 = 'Claire';
var	photo4 = 'images/500px/BORRELLIClaire_neutre.jpg';

var	nom5 = "Guibergia";
var prenom5 = 'Valentin';
var	photo5 = 'images/500px/GUIBERGIAValentin_neutre.jpg';

/* on  tente une organisation */
var prenoms = [prenom1, prenom2, prenom3, prenom4, prenom5];
var noms = [nom1, nom2, nom3, nom4, nom5];
var photos = [photo1, photo2, photo3, photo4, photo5];

window.addEventListener('click', start());


function start() {
	
	var div_image1 = document.createElement("div");
	div_image1.style.float="left";
	var zone_image1 = document.createElement("img");
	zone_image1.src = photo1;
	zone_image1.style.width = "200px";

	div_image1.appendChild(zone_image1);
	zone_image.appendChild(div_image1);
	
    var div_image2 = document.createElement("div");
	div_image2.style.float="left";

	var zone_image2 = document.createElement("img");
	zone_image2.src = photo2;
	zone_image2.style.width = "200px";


	div_image2.appendChild(zone_image2);
	zone_image.appendChild(div_image2);
	
	var div_image3 = document.createElement("div");
	div_image3.style.float="left";

	var zone_image3 = document.createElement("img"); 
	zone_image3.src = photo3;
	zone_image3.style.width = "200px";


	div_image3.appendChild(zone_image3);
	zone_image.appendChild(div_image3);
	
	var div_image4 = document.createElement("div");
	div_image4.style.float="left";

	var zone_image4 = document.createElement("img");
	zone_image4.src = photo4;
	zone_image4.style.width = "200px";


	div_image4.appendChild(zone_image4);
	zone_image.appendChild(div_image4);
	
	for (i=0;i<=3;i++) {
		zone_image.children[i].firstElementChild.addEventListener("click",play);
	}

    /* On tire une photo au sort */
	var index = Math.floor(Math.random()*zone_image.children.length);
	console.log(index);
	zone_image.children[index].firstElementChild.id="ok";

	var question= "Qui est "+prenoms[index]+" "+noms[index]+" ?";
	zone_question.innerHTML = question;
}

/* a la fin du jeu, on efface toutes les photos*/
function endgame(){
	for (i=0;i<=3;i++) {
	zone_image.removeChild(zone_image.firstElementChild);
	}
}

 
var nbBonneRep=0;
 
function play() {
	if(this.id == "ok") {
		if(nbBonneRep<10){
			
			nbBonneRep ++;
			zone_score.innerHTML = nbBonneRep;
			endgame();
			start();


		}
		else {
			alert("Niveau terminé");
		}
	}
	else {
			alert("Il faut réviser");
		}
	}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
	  
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
	
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* test suffle array 
var tab=[1,2,3,4,5];
shuffle(tab);
console.log(tab);
*/


/*  TEST FONCTION QUI PREND UN ELEMENT AU HASARD 
var tab=[1,2,3,4,5];
console.log(tab[Math.floor(Math.random()*tab.length)]);
*/
