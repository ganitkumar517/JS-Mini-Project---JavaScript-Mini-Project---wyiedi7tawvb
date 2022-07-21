let username=[];
let password=[];
let number=[];
let email=[];
var i=0;
function register(){
    event.preventDefault();
    var user=document.getElementById("text1").value;
    var mail = document.getElementById("text4").value;
    var pass = document.getElementById("text2").value;
    var num = document.getElementById("text3").value;

    if (user == ""){
        alert("username required.");
        return ;
    }
    else if (pass == ""){
        alert("Password required.");
        return ;
    }
    else if (num == ""){
        alert("number required.");
        return ;
    }

    else if ( mail==""){
        alert("email required.");
        return;
    }
    else if(username.indexOf(user) == -1){
        username.push(user);
        password.push(pass);
        email.push(mail);
        number.push(num);

        alert(user + "  Thanks for registration. \nTry to login Now");
        document.getElementById("log").style.visibility= "visible";
        document.getElementById("reg").style.visibility= "hidden";

        document.getElementById("text1").value ="";
        document.getElementById("text2").value="";
        document.getElementById("text3").value="";
        document.getElementById("text4").value="";
 
    }
    else{
        alert(user + " is already register.");
        return ;
    }
}
function login(){
        event.preventDefault();

        var user = document.getElementById("logtext1").value;
        var pass = document.getElementById("logtext2").value;

        var i = username.indexOf(user);

        if(username.indexOf(user) == -1){
            if (user == ""){
                alert("user required.");
                return ;
            }
            alert("user does not exist.");
            return ;
        }
        else if(password[i] != pass){
            if (pass == ""){
                alert("Password required.");
                return ;
            }
            alert("Password does not match.");
            return ;
        }
        else {
            alert(user + " yor are login Now \n welcome to our website.");
            document.getElementById("a1").style.visibility= "visible";
            document.getElementById("logtext1").value ="";
            document.getElementById("logtext2").value="";
            return ;
        }

    }
    function a1(){
         var numm=document.getElementById("a1text").value;
         if(number.includes(numm)){
            alert("authentication 1 is complete");
            document.getElementById("a2").style.visibility= "visible";
         }else{
            alert("incorrect number/number does not match");
         }
    }
    function a2(){
        var mail=document.getElementById("a2text").value;
        if(email.includes(mail)){
           alert("authentication 2 is complete");
           alert("welcome to my world");
           location.assign("https://github.com/ganitkumar517");
           
        }else{
           alert("incorrect email/email does not match");
        }
   }
