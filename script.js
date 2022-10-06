const app = {};

app.init = function () {
    //grab the elements for mobile menu
    app.menuOpen = document.querySelector('#menuOpen');
    app.menuClose = document.querySelector('#menuClose');
    app.mobileMenu = document.querySelector('.slideOutMenu');

    //elements for popup modal
    app.modal = document.querySelector('#modal');
    app.modalClose = document.querySelector('#closeModal');

    //call the menu function
    app.menu();
    // call the noMenu function
    app.noMenu();
    //call the closeModal function
    app.closeModal();
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

// POPUP MODAL

// After screen loads - 2 seconds then email subscription modal pops up
window.onload = function () {
    setTimeout( () => {
        app.modal.style.visibility = "visible"
    }, 2000);
};

// when user clicks on the "X" close the modal 
app.closeModal = function () {
    app.modalClose.addEventListener('click', () => {
        app.modal.style.visibility = "hidden"
    });
};

app.init();