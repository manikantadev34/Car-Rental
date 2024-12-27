let get_login_Username=document.getElementById("login_Username");
let get_login_email=document.getElementById("login_email");
let get_login_password=document.getElementById("login_password");
let get_login_btn=document.getElementById("login_btn");
let get_error2=document.getElementById("error2");

// let get_user_name_hp=document.getElementById("user_name_hp");
// let get_logout_hp=document.getElementById("logout_hp");

get_login_btn.addEventListener("click",()=>{
    if((get_login_Username.value==localStorage.getItem("Username")) && (get_login_email.value==localStorage.getItem("Email")) && (get_login_password.value==localStorage.getItem("Password"))){
        get_error2.classList.add("d-none");
        // get_login_btn.textContent=
        window.location.assign("./homepage.html");
        // console.log(localStorage.getItem("Username"));
        // console.log(localStorage.getItem("Email"));
        // console.log(localStorage.getItem("Password"))

        // get_login_Username.value="";
        // get_login_email.value="";
        // get_user_name_hp.textContent=localStorage.getItem("Username");
        // console.log(localStorage.getItem("Username"));
    }
    else{
        get_error2.classList.remove("d-none");
    }
});

// get_logout_hp.onclick=function(){
    
//     localStorage.setItem("Username","");
//     localStorage.setItem("Email","");
//     localStorage.setItem("Password","");

//     window.location.assign("./index.html");
// }

