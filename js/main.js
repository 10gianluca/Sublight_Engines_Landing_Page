const topnav = document.getElementsByClassName("topnav");
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
        alert("Thank You For Contacting Us")
    });
    $('.rectangle6').click(function(){
        alert("Downloading Now")
    });
});