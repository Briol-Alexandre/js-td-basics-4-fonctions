/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile


function bissectile(jour, mois, annee) {
    if ((annee % 4 === 0 && !(annee % 100 === 0)) || (annee % 400 === 0)) {
        isBessextile = true
    }
}

// Fonction pour vérifier si une date est valide
function isValide(jour, mois, annee) {
    let isValide = true;
    if (annee < 0) {
        isValide = false;
    }
    if (mois > 12 || mois < 0) {
        isValide = false;
    }
    if (jour < 0 || jour > 31) {
        isValide = false;
    }

    switch (mois) {
        case 2:
            if ((annee % 4 === 0 && !(annee % 100 === 0)) || (annee % 400 === 0)) {
                if (jour > 29) {
                    isValide = false;
                }
            } else if (jour > 28) {
                isValide = false;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (jour > 30) {
                isValide = false;
            }
            break;
    }

    let result = 'Le ' + jour;
    if (isValide) {
        switch (mois) {
            case 1:
                result += ' janvier ';
                break;
            case 2:
                result += ' février ';
                break;
            case 3:
                result += ' mars ';
                break;
            case 4:
                result += ' avril ';
                break;
            case 5:
                result += ' mai ';
                break;
            case 6:
                result += ' juin ';
                break;
            case 7:
                result += ' juillet ';
                break;
            case 8:
                result += ' août ';
                break;
            case 9:
                result += ' septembre ';
                break;
            case 10:
                result += ' octobre ';
                break;
            case 11:
                result += ' novembre ';
                break;
            case 12:
                result += ' décembre ';
                break;
        }
        result += annee;
        result += ' est une date valide';

    } else {
        result = 'Votre date n’est pas valide';
    }
    console.log(result);
}

// Demander à l'utilisateur de saisir une date
const jour = parseInt(prompt('Entrez un jour'));
const mois = parseInt(prompt('Entrez un mois'));
const annee = parseInt(prompt('Entrez une année'));
// Utilisation de la fonction isValid pour vérifier la date
let isBissesctile= bissectile(jour, mois, annee);
let valid =isValide(jour, mois, annee);