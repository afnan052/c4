function validate()
{
    
    var name = document.getElementById("uname").value;

   //1. Take input from contact field(id :"contact")
    var phone = document.getElementById("contact").value;

    //2. calculate length of contact number (stored in variable "phone")
    var count=phone.length;
    
    if(name == ''){
        document.getElementById("err1").style.display="block";
    }
    else{
        document.getElementById("err1").style.display="none";
    }

    //3. if count is not equal to 10, then display the 'err2' element by setting the display property to "block"
    //else hide the 'err2' element by setting the display property to "none"
    if(count!=10){
        document.getElementById("err2").style.display="block";
    }
    else{
        document.getElementById("err2").style.display="none";
    }
    
}

