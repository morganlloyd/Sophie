const app = {};

app.init = function () {
    //grab the elements for mobile menu
    app.menuOpen = document.querySelector('#menuOpen');
    app.menuClose = document.querySelector('#menuClose');
    app.mobileMenu = document.querySelector('.slideOutMenu');

    //call the menu function
    app.menu();
    // call the noMenu function
    app.noMenu();
};

// SLIDE OUT MENU FUNCTIONS
// when user clicks the hamburger menu on tablet/mobile view the menu slides out.
app.menu = function () {
    app.menuOpen.addEventListener('click', () => {
        app.mobileMenu.classList.add('open');
    });
};

// when user clicks on the "x" the popup will slide away
app.noMenu = function () {
    app.menuClose.addEventListener('click', () => {
        app.mobileMenu.classList.remove('open');
    });
    
}


app.init();