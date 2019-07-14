//*Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif).
// Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

//Créer par Maggy Gagné Lemire 11-07-2019

//Déclaration des variables
var nom;
var age;
var jours = 365;

//Lecture au clavier (l'usager entre une valeur)
nom = prompt("Entrez votre prénom :");
age = Number(prompt("Entrez votre âge : "));

//Les calculs
jours = age * jours;

//Les affichages
alert   (nom + " vous avez " + jours + " jours de vécus");