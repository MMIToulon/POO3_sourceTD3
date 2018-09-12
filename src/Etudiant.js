/*!
* \brief Cette classe definit un etudiant pour
*   envoyer un mail aux anciens pour les 25 ans de mmi
* \author Claire DUNE
* \date 05/09/2018
*/

class Etudiant{

    /*!
    * \brief constructeur par defaut de la classe
    * \author Claire DUNE
    * \date 05/09/2018
    */
    constructor(){
        this.prenom = "";
        this.nom = "";
        this.mail = "";
        this.promotion = "";

    	console.log('Etudiant construit');
    }

    /*!
    * \brief permet de saisir les parametres
    * \author Claire DUNE
    * \date 05/09/2018
    */
    saisir(p,n,m,a){
        this.prenom = p;
        this.nom = n;
        this.mail = m;
        this.promotion = a;

    }


    /*!
    * \brief fonction de debug pour afficher l'objet
    *      dans la console
    * \author Claire DUNE
    * \date 05/09/2018
    */
    afficher(){
    	console.log('nom '+this.nom);
    	console.log('prenom '+this.prenom);
    	console.log('mail '+this.mail);
    }

    /*! 
    * \brief envoie un mail a l'etudiant
    * \param un objet mail 
    * \author claire dune
    * \date 05/09/2018
    */
    envoyerMail(objet, contenu){

        console.log("envoyer un email a " +
                     this.mail+" objet : " +
                     objet + "contenu : " + contenu );






    }
}


