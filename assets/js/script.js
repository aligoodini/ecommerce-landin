const $ = document;
let navMobile = $.querySelector(".nav-mobile"),
    hambergerMenu =$.querySelector(".hamberger-menu"),
    closeBtn = $.querySelector(".nav_close-btn");

    hambergerMenu.addEventListener("click" , ()=>{
        navMobile.classList.add("activemenu");
    });
    closeBtn.addEventListener("click" , ()=>{
        navMobile.classList.remove("activemenu");
    })