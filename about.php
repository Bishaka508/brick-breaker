<?php
include('common.php');
outputHeader('About');
?>
<?php
outputBannerNavigation('About');
?>
    <main>
        <div class="hello"><!--  backgroundimage for this page in hello class-->
            <div class="aboutleft">BRICK BREAKER
                <div class="inside"><!-- inside class for the paragraph below the title-->
                    “BRICKBREAKER” is a 2D game where player has to smash the wall of bricks by bouncing the ball in a paddle. The paddle lies in the bottom part of the page and moves horizontally. It can be controlled by the computer mouse. The player has total of three lives and if they don’t manage to keep the ball on the paddle or drop the ball they will loose one life. The game will be ended after all those 3 lives are finished. The player scores by hitting the ball on the brick. There’s going to be different options of level for player to play.
                </div>
            </div>
            <div class="aboutright">

                <div class="contact"><strong> CONTACT INFO</strong></div>
                <!-- icons -->
                <div class="details">Instagram ><i class="fab fa-instagram-square" style="color: darkred;"></i></div>
                <div class="details">Facebook ><i class="fab fa-facebook" style="color: darkred;"></i></div>
                <div class="details">Twitter ><i class="fab fa-twitter" style="color: darkred;"></i></div>
            </div>

        </div>
    </main>
    <?php
outputFooter();
?>
