const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");


menuEmail.addEventListener("click", toggleDestopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleProductDetail);

function toggleDestopMenu() {
    const productDetailClose = productDetail.classList.contains ("inactive");
    if (!productDetailClose) {
        productDetail.classList.add ("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const productDetailClose = productDetail.classList.contains ("inactive");
    if (!productDetailClose) {
        productDetail.classList.add ("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    
    const mobileMenuClose = mobileMenu.classList.contains ("inactive");
    const desktopMenuClose = desktopMenu.classList.contains ("inactive");

    if (!mobileMenuClose) {
        mobileMenu.classList.add ("inactive");
    }

    if (!desktopMenuClose) {
        desktopMenu.classList.add ("inactive");
    }

   /* if (!mobilMenuClose) {
        productDetailClose;
    }*/

    productDetail.classList.toggle("inactive");




}