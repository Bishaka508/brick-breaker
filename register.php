<?php
include('common.php');
outputHeader('Register');
?>
<?php
outputBannerNavigation('Register');
?>
    <main>
       

        <div class="hello" >
            <div class="box"><!--teh register box styling done in box class-->
                <div class="square">
                    <div class="reg">Register</div>
                </div>

               <script defer src="register.js"></script>

                <form  id="register" class="input-group"  >
                    <input type="text" class="input-id" id="UserInput"placeholder="Username" required><error id='redcol' style="color:red;"></error>
                    <input type="email" class="input-id" id="EmailInput"  placeholder=" Email " required><error id='redco' style="color:red;"></error>
                   <input type="password" class="input-id" id="PasswordInput" placeholder=" Enter a Password" required><error id='red' style="color:red;"></error>
                   <input type ="tel" class="input-id" id="Phone" placeholder="Phone No" pattern="[0-9]{11}" required><error id='redcolor' style="color:red;"></error><br>
                    <b>CONTINENT</b>
                    <select id="continent" >
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Australia</option>§
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Antartica</option>
                    </select>
                    <input type="checkbox" class="check-box" required><span>I agree to the terms and conditions</span>
                    <button type="submit" class="submit-btn" onclick="StoreUser(); ValidateEmail(); checkPassword(); checkUser(); checkPhoneNo();" >Register</button>
                    <div> Already have an account?<a href="login.php" class="account">Login here</a></div>

                    <p id="Result"></p>
               </form>
                

            </div>

        </div>
       
        
    </main>

    <?php
outputFooter();
?>
