//*Calculer le salaire brut d’un employé.
// Il est payé à l’heure et les données concernant
// le taux horaire et le nombre d’heures travaillées sont fournies en entrée.


//Déclaration des variables
var taux;
var heures;
var brut;


//Lecture au clavier (l'usager entre une valeur)
taux = Number (prompt("Veuillez entrer votre taux horaire: "));
heures = Number (prompt("Veuillez entrer votre nombre d'heures travaillées: "));


//Les calculs
brut = taux * heures;

//Les affichages

alert("votre salaire brut est de " + brut +  "$");
