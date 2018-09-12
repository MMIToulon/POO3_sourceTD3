// je fais appel IMPLICITE
// a la methode constructor
// pour construire mon objet
var perso = new Personne();

// j'"hydrate" la classe
perso.nom = "Rob";
perso.prenom = "Stewart";

// j'affiche tout l'objet dans 
// l'ardoise de debug
console.log(perso);

// VERBOTTEN / FORBIDDEN !!!! 
//perso.constructor();

// je fais appel a la fonction afficher de 
// la classe Personne
perso.afficher();

// encore 
perso.afficher();

