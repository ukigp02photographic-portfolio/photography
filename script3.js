function validateform(){  
    var email = document.getElementById("email").value;  
    var password = document.getElementById("password").value;  
    
    if (email==null || email==""){
        alert("Email can't be blank");  
        return false;  
    }else if(password==""){  
        alert("Password can't be blank");  
        return false;
    }
    else{
        return true;
    }
}

      const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
    