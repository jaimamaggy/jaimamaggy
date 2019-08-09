//*Faites un programme qui lit le nom d’un article et son prix de
// détail.Votre programme doit afficher le prix de gros (66% du prix
// de détail) ainsi que le profit attendu.


//Créer par Maggy Gagné Lemire 08-08-2019

//Déclaration des variables
var nom;
var detail;
var gros;

//*Lecture au clavier (l'usager entre une valeur)//


nom = prompt("Entrez votre article :");
detail = (prompt("Entrez votre prix détail : "));

//Les calculs
gros = detail * 0.66;

//Les affichages
alert   (nom + " voici le tarif en gros " + gros + "$");