const topnav = document.getElementsByClassName("topnav");
const emailRegex = 
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
$(document).ready(function(){
    $('.hamburger').click(function(){
       document.getElementById('clickme1').className = 'showrectangle1';
       document.getElementById('dropDown').className = 'openNav';
       document.getElementById('option1').className = 'showme2';
       document.getElementById('option2').className = 'showme2';
       document.getElementById('option3').className = 'showme2';
       document.getElementById('option4').className = 'showme2';

    });
    $('.mainimage').click(function(){
        document.getElementById('clickme1').className = 'rectangle1';
        document.getElementById('dropDown').className = 'closeNav';
        document.getElementById('option1').className = 'hideme';
        document.getElementById('option2').className = 'hideme';
        document.getElementById('option3').className = 'hideme';
        document.getElementById('option4').className = 'hideme';
    });
    $('#dropDown.openNav').click(function(){
        document.getElementById('clickme1').className = 'rectangle1';
        document.getElementById('dropDown').className = 'closeNav';
        document.getElementById('option1').className = 'hideme';
        document.getElementById('option2').className = 'hideme';
        document.getElementById('option3').className = 'hideme';
        document.getElementById('option4').className = 'hideme';
    });
    $('.topnav a ').click(function(){
        document.getElementById('clickme1').className = 'rectangle1';
        document.getElementById('dropDown').className = 'closeNav';
        document.getElementById('option1').className = 'hideme';
        document.getElementById('option2').className = 'hideme';
        document.getElementById('option3').className = 'hideme';
        document.getElementById('option4').className = 'hideme';
    });
    $('.submitLabel').click(function(){
            if (namecheck() == true && emailcheck() == true && phonecheck() == true){
                alert("Thank You For Contacting Us")
            }
        });
    $('.rectangle6').click(function(){
        alert("Downloading Now")
    });
});
function namecheck(){
    var input = document.getElementById('name');
    if ($('input').length > 0 && $('input').val() != ''){
        return (true)
    }else{
        alert("You have entered an invalid name!")
    }

}
function emailcheck(){
    var input = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
    {
      return(true)
    }else{
      alert("You have entered an invalid email address!")
    }
}
function phonecheck(){
    var input = document.getElementById('phone');
    var phoneno = /^\d{10}$/;
    if((input.value.match(phoneno))){
      return true;
    }else{
      alert("You have entered an invalid phone number!");
    }
}


