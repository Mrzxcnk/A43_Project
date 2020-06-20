
    var textOne = document.getElementById("text-one");
    var textTwo = document.getElementById("text-two");
    var thumb = document.getElementById("thumb");
    var button = document.getElementById("button");
    var fLogo = document.getElementById("footer-logo");

    fLogo.innerHTML = "&copy; Copyright 2020 Team_A43"
    function like(){
        textOne.style.opacity = 0;
        textOne.style.zIndex = -1;
        textOne.style.display = "none";
        thumb.style.zIndex = 1;
        thumb.style.opacity = 1;
        button.style.zIndex = -1;
        button.style.display = "none";
        textTwo.style.display = "block";
        textTwo.style.zIndex = 1;;
        textTwo.style.opacity = 1;
    }
