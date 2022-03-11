/**Création d'une div */

// const diceElement = document.createElement("div");
// console.log(diceElement);

/*On ajoute une class .dice pour la div déjà dispo dans le CSS*/

// diceElement.className = "dice";
// console.log(diceElement);

/** On créé le parent avec l'ID player 
 *  On insère diceElement à la div avec l'ID player*/

const parentDiceElement = document.querySelector("#player");
// console.log(parentdiceElement);

// parentdiceElement.appendChild(diceElement);
// console.log(diceElement);

let diceRolled = 0;

function rollTheDice(max, min){
    diceRolled = Math.round(Math.random() * (max - min) + min);
    const diceElement = document.createElement("div");
    diceElement.style.backgroundPosition = `${(diceRolled - 1) * -100}px`; 
    diceElement.classList.add("dice");
    parentDiceElement.appendChild(diceElement);
}
// rollTheDice(6, 1);
// console.log(diceRolled);


/** On modifie la position du sprite en fonction du resulat de notre function */

// function diceDisplay(){
//     for (index = 1 ; index === diceRolled ; index++){
//         if(index === diceRolled){
//             diceElement.style.backgroundPosition = `${(index - 1) * -100}px`;  
//         }
//     }
// }

// diceDisplay();

/** On veut lancer un nombre de dé en focntion de la saisie de l'utilisateur */

let nbOfDice = parseInt(prompt("Combien de dés souhaites-tu lancer ?"))

generateDice()

function generateDice (){
    for( index = 0 ; index < nbOfDice ; index++ ){    
        rollTheDice(6, 1);
        console.log(diceRolled);
        }
    }