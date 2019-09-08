//** Créer par Maggy Gagné Lemire / 29-08-2019 */

$('#victoire').hide();

//jeux-du-casse-tête
var premierClique = 1;
var premierImageSRC ;
var premiereImageID ;
var deuxiemeImageSRC;
var deuxiemeImageID;


$(".img-fluid").click(function() {
        if (premierClique === 0) {
            premiereImageID =this.id;
            premierImageSRC = this.src;
            $("#" + premiereImageID).hide();
           premierClique = 1;
        }

        else {
        premierClique = 0;
            deuxiemeImageID =this.id;
            deuxiemeImageSRC = this.src;
            $('#' + premiereImageID).attr("src",deuxiemeImageSRC);
            $('#' + deuxiemeImageID).attr("src",premierImageSRC);
            $("#" + premiereImageID).show();
    }


});




//curseur doit devenir un pointeur.
$( ".img-fluid" ).hover(function() {
    $(this).css('cursor','pointer');
//Le code ici sera seulement exécuté lorsque la souris survole target.
});


//fonction victoire A-FAIRE

$("#victoire").append(function () {
    if ($("#1").attr("src") === "img/img1.jpg") ;
    if ($("#2").attr("src") === "img/img2.jpg") ;
    if ($("#3").attr("src") === "img/img3.jpg") ;
    if ($("#4").attr("src") === "img/img4.jpg") ;
    if ($("#5").attr("src") === "img/img5.jpg") ;
    if ($("#6").attr("src") === "img/img6.jpg") ;
    if ($("#7").attr("src") === "img/img7.jpg") ;
    if ($("#8").attr("src") === "img/img8.jpg") ;

    else {
        $('#victoire').show();
    }

});

//bouton recommencer
$( "#boutonRecommencer" ).click(function() {
    $("#1").attr("src","img/img8.jpg");
    $("#2").attr("src","img/img6.jpg");
    $("#3").attr("src","img/img4.jpg");
    $("#4").attr("src","img/img2.jpg");
    $("#5").attr("src","img/img9.jpg");
    $("#6").attr("src","img/img7.jpg");
    $("#7").attr("src","img/img5.jpg");
    $("#8").attr("src","img/img3.jpg");
    $("#9").attr("src","img/img1.jpg");
});

//bouton tricher A-FAIRE

$( "#boutonTricher" ).click(function() {
    $('#victoire').show();

});















