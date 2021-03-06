<!DOCTYPE html>
<html lang="fr-ca">
<head>
    <meta charset="UTF-8">
    <title>Passion d'été-</title>
    <link rel="stylesheet" type="text/css" href="CSS/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="CSS/Style.css">

    <meta name = "Accueil" content = "Page D'accueil avec demonstration"> <meta name = " keywords " content = " video, mission, été, sangria," >
    <meta name = " author " content = "Maggy Gagné Lemire" >

    <title>
        Page explicative de mon hobby d'été.
    </title>
</head>
<body>
<?php
        include "header.php";
?>
<section id="carousel">
<!-- section 1  -->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="img-fluid" src="img/la-sangria.jpg" alt="sangria">
        </div>
        <div class="carousel-item">
            <img class="img-fluid" src="img/Strawberry.jpg" alt="dans la piscine">
        </div>
        <div class="carousel-item">
            <img class="img-fluid" src="img/pomme.jpg" alt="illustration sangria">
        </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>
</div>


</section>

<!-- section 1 -->


<!-- section 2  -->
<section id="recette">
    <div class="container-fluid bgcolor h-100 md">
        <div class="row no-gutters">
            <div class="text-center text paddingZone2 text-justify">
                <h1>Pourquoi?</h1>
                <p>Pourquoi, pourquoi pas. La sangria est une boisson alcoolisée aux origines controversées. Selon certaines sources, la sangria ne proviendrait pas d'Espagne, mais plutôt des Antilles ou d'Amérique du Sud. C'est au XIX e siècle que les premières références à cette boisson sont faites, toutes sur le continent américain. Puis j’aime son goût rafraîchissant et sucrée.</p>
            </div>
        </div>
    </div>
</section>
<!-- section 2  -->

<!-- section 3  -->
<section id=" video">
<div class="container text-center padding youtube">
<div class="row ">
    <div class="col-12">
        <h1 class="text-center display-3 text ">Démonstration</h1>
        <hr class="my-5">
    </div>
</div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2YwJfFbpIY4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</section>
<!-- section 3  -->

<!-- section 4  -->
<section class="page-section cta">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto">
                <div class="cta-inner text-center rounded">
                    <h2 class="section-heading mb-4 text">
                        <span class="section-heading-upper md">Mission d'été</span>
                        <br>
                    </h2>
                    <p>
                    <span class="section-heading-lower md">Cette été ma mission est de me concentrer sur mes études et m’entrainer pour mon voyage à Compostelle du mois de novembre. work hard in silence let success make the noise.</span>
                    </p>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- section 4 -->















<script src="JS/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
<script src="JS/bootstrap.js"></script>


</body>
</html>