<?php
include('common.php');
outputHeader('Game');
?>
<?php
outputBannerNavigation('Game');
?>
<main>

   <div class="hello2" id ="for-game" >
   <canvas id ="myCanvas" width="800" height="500"></canvas>
   <p id = "halfresult" style="font-size:30px; color:yellow; background-color:black;"> YOU CAN ENTER YOUR SCORE IN UPDATE BOX AND CLICK UPDATE BUTTON TO SEE YOUR RANKING.</p>
   <input type="text" id="UpdateScore" style="height: 45px; width: 170px; font-size:28px; display: block; margin-right: auto; margin-left: auto;" /><button class="submit-btn" style="width:180px; margin:0px auto; " onclick="updateScore()">UpdateScore</button><br>




    

    <script defer src="game.js">

    </script>

   

      <!--  function updateScore(){
            let newScore = document.getElementById("UpdateScore").value;
            if(sessionStorage.loggedInUsername !== undefined){
                var usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsername]);
                if(usrObj.score < newScore){
                    usrObj.score = newScore;
                    localStorage[usrObj.username] = JSON.stringify(usrObj);
                }

            }
            window.location.href="ranking.php";
        }-->
  

</div>
</main>
