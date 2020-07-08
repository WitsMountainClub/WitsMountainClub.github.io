//The header disappears when user scrolls down, but reappears as soon as user scrolls up again
let myHeader = document.querySelector("header");
if (myHeader != null) {
    //THIS WORKS... but idk if it's the best solution due to different references
    //myHeader.innerHTML = "<div class='logo'><a href=''>EDDIE<span>BLOGS</span></a></div><nav class='header_nav'><ul><li><a href='About-Me/'>About Me</a></li><li><a href='blogs/'>My Blogs</a></li><li><a href='Learn-With-Me/'>Vision API</a></li><li><a href='Contact-Me/'>Contact Me</a></li></ul></nav><div class='' menu-toggle'><img src='Images / menu_Mobile.png'></div></div>";
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            myHeader.style.top = "-60px";
        } else {
            myHeader.style.top = "0";
        }
        lastScrollTop = scrollTop;
    })
}

//This enables the mobile view's icon to be a button
let menuToggleButton = document.getElementsByClassName("menu-toggle")[0];
let header_Nav = document.getElementsByClassName("header_nav")[0];
if (menuToggleButton != null) {
    menuToggleButton.style.cursor = "pointer";
    //When this icon is clicked, the mobile menu should appear
    menuToggleButton.addEventListener("click", function () {
        if (header_Nav != null) {
            header_Nav.classList.toggle("active");
        }
    });
}