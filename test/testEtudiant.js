// je fais appel IMPLICITE
// a la methode constructor
// de la classe Etudiant 
// pour construire l'objet alumni
var alumni = new Etudiant();

// pour débugger, une bonne
// solution est d'utiliser 
// console.log
console.log(alumni);

// 
alumni.afficher();

// je peux tout "hydrater ligne a ligne"
/*alumni.nom = "Rob";
alumni.prenom = "Stewart";
alumni.mail = "e@gmail.com";*/

// ou bien ajouter une fonction de saisie
alumni.saisir ("Rob","Stewart", "e@gmail.com",2005);

// j'affiche tout l'objet dans 
// l'ardoise de debug
console.log(alumni);

// je fais appel a la fonction afficher de 
// la classe Etudiant, c'est une fonction
// de debug qui affiche les valeurs des attributs
// dans la console
alumni.afficher();

var texte = "bla bla bla";
var obj = "but du mail ";

alumni.envoyerMail(obj,texte);


