//créer par maggy le 22-o8-2019

$('#flashID').css("position","relative");
var compteur=
$('#boutonGauche').click(function() {
    $( "#flashID" ).css("left",50);
});

$('#boutonDroite').click(function() {
    $('#flashID').css("left",50);
});

$( "#" ).click(function() {
    var nomImage = $('#flashID').attr("src");
    alert(nomImage);
    if(nomImage === "medias/bg.jpg")
    {
        $('#flashID').attr("src","medias/sw.jpg");
    }
    else
        $('#flashID').attr("src","medias/bg.jpg");


});

$("#boutonEnleverImage").click(function() {
    $('#flashID').hide();
});

$("#boutonAjouterImage").click(function() {
    $('#flashID').show();
});

$(‘#boutonAjouterAttribut’).attr(“alt” , “photo de Flash”);


$("#boutonAjouterTitre").click(function() {
    $( 'body' ).prepend( "<h1>FLASH JQUERY</h1>" );
});


