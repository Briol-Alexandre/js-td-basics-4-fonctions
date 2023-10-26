/*****************************
* 020 - Fonctions - Préalable
*/

// 6. FONCTION ANONYME

// 1°) Déclaration de fonction sous la forme d'une expression de fonction

// a) sans paramètre ni return

/* EXERCICE :
- Déclarez sous la forme d'une expression de fonction
  la fonction direBonjour qui affiche "Bonjour !" dans la console
- Exécutez la fonction
*/

// Expression de fonction sans paramètre ni return
/*function direBonjour(){
    console.log('Bonjour !');
}


// Appel de la fonction
direBonjour()


// b) sans paramètre mais avec return
function direBonjour2(){
    return 'Bonjour !';
}
let bonjour=direBonjour2();
console.log(bonjour);*/
/* EXERCICE 2 :
- Déclarez sous la forme d'une expression de fonction
  la fonction disBonjour qui retourne la chaîne "Bonjour !"
- Utilisez-la pour afficher "Bonjour !" dans la console
*/
// Expression de fonction sans paramètre mais avec return
function disBonjour(){
    return 'Bonjour !';
}
let bonjour= disBonjour();
console.log(bonjour);

// Utilisation de la fonction pour afficher "Bonjour !" dans la console



// c) avec paramètre et return

/* EXERCICE 3 :
- Déclarez sous la forme d'une expression de fonction la fonction salue qui
   - prend le paramètre prenom
   - stocke dans une variable message "Bonjour !"
   - retourne ce message
- Utilisez-la pour saluer Thomas dans la console
*/
function salue(prenom){
    let message='Bonjour '+prenom+ ' !';
    return message;
}
let message=salue('Thomas');
console.log(message)
// Expression de fonction avec paramètre et return

// Utilisation de la fonction pour saluer Thomas dans la console
