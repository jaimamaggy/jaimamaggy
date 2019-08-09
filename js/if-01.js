/*1. Lire deux nombres et afficher le plus grand des deux.*/

//Créer par Maggy Gagné Lemire 18-07-2019

//Déclaration des variables
var number;
var number1;

//Lecture au clavier (l'usager entre une valeur)
number1 = prompt("Entrez votre nombre :");
number = Number(prompt("Entrez votre deuxième nombre : "));

//Un si à deux conditions (cas le plus simple)
if(number < number1)
{
    //Tout ce qu'il y a entre les deux accolades ce fait uniquement
    // si age < 18 est vrai
    alert( number1 );
}
else if (number1 < number)
{
    alert( number );
}


//Les affichages