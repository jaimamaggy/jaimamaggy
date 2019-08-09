/*Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant
total de ses achats est plus grand que 200.00$. Écrire un algorithme qui permet de
calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total
des achats */

//Créer par Maggy Gagné Lemire 18-07-2019

//Déclaration des variables

var number;
var note;



//Lecture au clavier (l'usager entre une valeur)

number = Number (prompt("Entrez votre totale de votre facture :"));



//faire les calculs ou le SI
//Un si à deux conditions (cas le plus simple)
note = number * 0.15 ;

if (number > 200)
{
    alert("vous économisez un montant de " + note + "$" );
}



else if (number < 200)
{
    alert("vous ne bénéficier pas de la promotion ");
}



//Les affichages
//alert ("vois la note")





