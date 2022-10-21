const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <a href="./index.html"> <img src="../IMG/fishtank_logo.png" class="brand-logo" alt="FISHTANK LOGO TEXT"></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search fish">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="../IMG/user.jpg"></a>
                <a href="#"><img src="../IMG/cart.jpg"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="./product.html" class="link">Product</a></li>
        </ul>
    `;
}

createNav();