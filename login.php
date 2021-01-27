<?php
include('common.php');
outputHeader('Login');
?>
<?php
outputBannerNavigation('Login');
?>
    <main>

        <div class="hello">
            <div class="box"><!-- for the whole login pink box-->
                <div class="square">

                    <div class="reg">Log In</div>

                </div>
                <p id="loginFailure" style="color:red;" ></p>
                <form  id="loginPara" class="input-group" >
                    <input type="text" class="input-id" id="UserInput" placeholder="Username" required><error id='lit' style="color:red;" ></error>
                    <input type="password" class="input-id" id="passwordInput" placeholder=" Password" required ><error id='littt' style="color:red;" ></error>
                    <button type="submit" id="LogInBtn"class="submit-btn" onclick="login(); userLogin(); passwordLogin(); " >Login</button>
                    
                    <div> Create an account>><a href="register.php" class="account">HERE</a></div>
                    
                </form>



            </div>
           
        </div>
        <button type="submit" id="LogOutBtn"class = "submit-btn" onclick="logout()" style="width: 170px; display: block; margin-right: auto; margin-left: auto;" >Logout</button>
        <script defer src="login.js">
            
        </script>
                        
        
        

    </main>
    <?php
outputFooter();
?>