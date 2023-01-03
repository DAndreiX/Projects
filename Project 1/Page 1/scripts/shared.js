var mobileButton = document.querySelector(".mobile-button");
var backdrop = document.querySelector(".backdrop");
var mainNav = document.querySelector(".main-nav");
var mobileButtonClicked = false;

function mobileMenuInteract(){
    if(!mobileButtonClicked){
        mainNav.classList.add("open");
        backdrop.classList.add("open");
        mobileButtonClicked = true;
    }
    else{
    mainNav.classList.remove("open");
    backdrop.classList.remove("open"); 
    mobileButtonClicked = false;
    }
}

mobileButton.addEventListener("click", mobileMenuInteract);
backdrop.addEventListener("click", mobileMenuInteract);