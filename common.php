<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    print( '<!DOCTYPE html>
     <html>
     <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width" , initial-scale=1.0>
     <script src="https://kit.fontawesome.com/01d919c143.js" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="style.css">
     </head>
     <body>'
);
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation

    print('<header>
        <div>
            <i class="fas fa-user-astronaut" style="font-size: 50px; color:black;"></i>
            <div>
                <p class="first">BRICK BREAKER</p>
            </div>
        </div>
        <nav>
            <ul>
            ');

    //Array of pages to link to
    $linkNames = array("Home", "Login", "Register", "Game","Ranking","About");
    $linkAddresses = array("index.php", "login.php", "register.php", "game.php","ranking.php","about.php");

    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<li class="nav"><a ';
        if($linkNames[$x] == $pageName){
            echo 'class="navi"
            class="nav"';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a> </li>';
    }
    echo '</ul></nav> </div> </header>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
  print('<footer>
  <div class="foot">
      <i class="fas fa-user-astronaut" style="font-size: 35px; color:white;">BRICK BREAKER</i>
      <small>&copy; Copyright 2020, Bishaka Corporation</small>
      <div class="side">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
      </div>
  </div>
</footer>
</body>
</html>');
}
?>
