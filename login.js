document.getElementById("b").addEventListener('click',function(e){
    e.preventDefault();
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    
    
    //use the below code if users stored in localStorage
    isPresent=localStorage.getItem(username)==password
    if(isPresent){
        window.location = "main.html";
    }
    else{
        window.alert("Incorrect username or password");
    }
});