function toggleMenu () {
    const menuMobile = document.getElementById('menu-mobile');

    if(menuMobile.className === "menu-mobile-active") {
        menuMobile.classList = "menu-mobile"
    } else {
        menuMobile.classList = "menu-mobile-active"
    }
}