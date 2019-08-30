//créer par maggy le 22-o8-2019

$('#flashID').css("position","relative");
var compteur = 0;


$('#boutonGauche').click(function() {
    compteur = compteur -50;
    $( "#flashID" ).css("left",compteur);
});

$('#boutonDroite').click(function() {
    $('#flashID').css("left",-50);
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
    $('#flashID2').css("opacity",".9");

});


