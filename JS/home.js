//----------------------- Product card slider -----------------------//
const productContainer = document.querySelector('.product-container');

function goPrevious() {
    productContainer.scrollBy({
        left: -250,
        behavior: 'smooth',
    });
    console.log("GO PREVIOUS CLICK");
}

function goNext() {
    productContainer.scrollBy({
        left: 250,
        behavior: 'smooth',
    });    
    console.log("GO NEXT CLICK");
}

const preBtn = document.querySelector('.pre-btn');
const nxtBtn = document.querySelector('.nxt-btn');
preBtn.onclick = goPrevious;
nxtBtn.onclick = goNext;
//-------------------------------------------------------------------//