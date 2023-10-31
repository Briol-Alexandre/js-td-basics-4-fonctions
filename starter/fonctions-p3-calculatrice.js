/*
FONCTIONS - PRÉPA 3 : Une première calculatrice
1. Déclarez la fonction calculer()
   pour qu'elle gère les 4 opérations mathématiques de base :
   addition, soustraction, multiplication et division.
   Conseil : utilisez un switch pour basculer entre les différentes opérations.
2. Utilisez ensuite votre fonction pour calculer
   - 4 + 6 (qui doit évidemment donner 10)
   - 4 - 6 (qui doit évidemment donner -2)
   - 2 * 0 (qui doit évidemment donner 0)
   - 12 / 0 (qui doit donner Infinity)
Aide : votre fonction s'exécute avec le pattern suivant : calculer(nb1, "+", nb2)
*/

// Déclaration de la fonction calculer

const operation = prompt('Choisissez entre addition, soustraction, multiplication ou division');

function calculer(num1, num2) {
    switch (operation) {
        case 'addition':
            console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
            break;
        case 'soustraction':
            console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
            break;
        case 'multiplication':
            console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
            break;
        case 'division':
            if (num2 !== 0) {
                console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
            } else {
                console.log('Infinity');
            }
            break;
        default:
            console.log('Opération non valide. Veuillez choisir parmi addition, soustraction, multiplication ou division.');
    }
}


// Utilisation de la fonction calculer
let calc =calculer(12, 89);
console.log(calc);
