//** Créer par Maggy Gagné Lemire / 29-08-2019 */

//jeux-du-casse-tête
var premierClique = 1;
var premierImageSRC;
var premiereImageID;
var deuxiemeImageSRC;
var deuxiemeImageID;

$( ".img-fluid" ).click(function() {

    var idImage = this.id;
    var srcImage = this.src;
        //$(idImage).hide();
    $("#" + idImage).hide();

        if (premierClique === 0) {
           premierClique = 1;
        }
        else
             premierClique = 0;

});

$(‘#imgSpiderman’).attr(“src” , “spidermanNoir.png”);

//$("img").click(function() {
 //   var id = this.id;;




//curseur doit devenir un pointeur.
$( ".img-fluid" ).hover(function() {
    $(this).css('cursor','pointer');
//Le code ici sera seulement exécuté lorsque la souris survole target.
});



















