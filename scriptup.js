//function toggleVisibility() {
  //  const collection = document.getElementsByClassName("mypass");
    //if (collection.type === "password") {
      //collection.type = "text";
    //} else {
      //collection.type = "password"; } }

      function toggleVisibility() {
        var x = document.getElementById("mypass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
    

      function vistog() {
        var x = document.getElementById("myp");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      function verifyPassword() {  
        var pw = document.getElementById("myp").value;  
        var nm = document.getElementById("name").value;
        var em = document.getElementById("mail").value;
        var mps= document.getElementById('mypass').value;
         
        if(pw == "") {  
           document.getElementById("error").innerHTML = "Please fill field!";  
           return false;  
        }  
        if(nm == "") {  
            document.getElementById("error").innerHTML = "Please fill field!";  
            return false;  
         }  
         if(em == "") {  
            document.getElementById("error").innerHTML = "Please fill field!";  
            return false;  
         }  
         
       
        if(pw.length < 8) {  
           document.getElementById("error").innerHTML = "Password length must be atleast 8 characters!";  
           return false;  
        }  
        
        
        if (pw!==mps){
          document.getElementById("error").innerHTML = "Password and Confirm password doesn't match!";  
          return false; 
        }
        return true
    }
      
    
    
 