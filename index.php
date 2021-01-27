<?php
include('common.php');
outputHeader('Home');
?>
<?php
outputBannerNavigation('Home');
?>

<main>
        <div class="hello"><!--hello class for styling start button-->
            <button class="start"><a href="register.php">START</a></button>
        </div>
<p style="font-size:30px;"><b>RULES::</b> Are you ready to break the bricks.Use the left and right arrow button in keyboard to move left and right.<br>
You can use curser as well.<br> Each brick contain 1 point, try to hit as many as possible.If you miss to land the ball in the paddle you lose.</p>
</main>

<?php
outputFooter();
?>
