//créer par maggy le 22-o8-2019

$('#flashID').css("position","relative");
$('#flashID2').hide();
$('#nuke').hide();

var compteur = 0;
$('#boutonGauche').click(function() {
    compteur = compteur -50;
    $( "#flashID" ).css("left", compteur);
});

$('#boutonDroite').click(function() {
    compteur = compteur +50;
    $('#flashID').css("left",compteur);
});

//*$( "#boutonChangerImage" ).click(function() {
   // var nomImage =
    // $('#flashID').attr("src","flash2.jpg");
//});

$( "#boutonChangerImage" ).click(function() {
    var nomImage = $('#flashID').attr("src");
    if(nomImage === "flash2.jpg")
    {
        $('#flashID').attr("src","flash.jpg");
    }
    else
        $('#flashID').attr("src","flash2.jpg");
});

$("#boutonEnleverImage").click(function() {
    $('#flashID').hide();
});

$("#boutonAjouterImage").click(function() {
    $('#flashID').show();
});

$("#boutonAjouterAttribut").attr('alt' , 'photo de Flash');


$("#boutonAjouterTitre").click(function() {
    $( 'body' ).prepend( "<h1>FLASH JQUERY</h1>" );
});

$("#boutonDupliquer").click(function() {
    $( 'body' ).prepend('<img id="flashID" alt="photo de Flash" class="flashClass" src="flash.jpg" width="200px"/>'  );

});

$("#boutonRalentir").click(function() {
    $( '#flashID' ).remove( );
});

$("#boutonTeleport").click(function() {
    $('#flashID').toggle();
    $('#flashID2').toggle();

});


$("#boutonVitesseSupreme").click(function() {
    var myvar = setInterval(disparaitreFlash, 500)

});
    function disparaitreFlash() {
        $('#flashID').toggle();
        setTimeout("disparaitreFlash()", 5000);
 }

$("#boutonNuke").click(function() {
    $('#sectionbouton').hide();
    $('#nuke').show();

});











