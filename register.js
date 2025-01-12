document.getElementById("b").addEventListener("click",function(e){
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById("password").value;
    var passwordcheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    isvalid = true;


    if(username.length<3){
        document.getElementById("nameerror").textContent="More than 3 characters required";
        document.getElementById("nameerror").style.display="block";
        isvalid = false;
    }
    else{
        document.getElementById("nameerror").textContent="";
    }

    if(!passwordcheck.test(password)){
        document.getElementById("passworderror").textContent="password need a combination of letters and number and more than 8 characters";
        document.getElementById("passworderror").style.display="block";
        isvalid = false;
    }
    else{
        document.getElementById("passworderror").textContent="";
    }


    if(isvalid){
        window.location = "login.html";
        localStorage.setItem(username,password);
    }
});