<nav class="navbar">
    <div class="nav-wrapper">
        <div class="logo">
            <a href="index.php">BeautyStore</a>
        </div>
        
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <ul class="nav-list">
            <li class="nav-item">
                <a href="index.php" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="shop.php" class="nav-link">Shop</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link">Categories</a>
                <ul class="dropdown-content">
                    <li><a href="skincare.php">Skincare</a></li>
                    <li><a href="makeup.php">Makeup</a></li>
                    <li><a href="haircare.php">Hair Care</a></li>
                    <li><a href="fragrance.php">Fragrance</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="brands.php" class="nav-link">Brands</a>
            </li>
            <li class="nav-item">
                <a href="sale.php" class="nav-link">Sale</a>
            </li>
        </ul>

        <div class="nav-icons">
            <a href="search.php" class="icon-link">
                <i class="fas fa-search"></i>
            </a>
            <a href="account.php" class="icon-link">
                <i class="fas fa-user"></i>
            </a>
            <a href="cart.php" class="icon-link">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count">0</span>
            </a>
        </div>
    </div>
</nav>

<script>
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
    this.classList.toggle('active');
});
</script>
<nav class="navbar">
    <div class="nav-wrapper">
        <div class="logo">
            <a href="index.php">BeautyStore</a>
        </div>
        
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <ul class="nav-list">
            <li class="nav-item">
                <a href="index.php" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="shop.php" class="nav-link">Shop</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link">Categories</a>
                <ul class="dropdown-content">
                    <li><a href="skincare.php">Skincare</a></li>
                    <li><a href="makeup.php">Makeup</a></li>
                    <li><a href="haircare.php">Hair Care</a></li>
                    <li><a href="fragrance.php">Fragrance</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="brands.php" class="nav-link">Brands</a>
            </li>
            <li class="nav-item">
                <a href="sale.php" class="nav-link">Sale</a>
            </li>
        </ul>

        <div class="nav-icons">
            <a href="search.php" class="icon-link">
                <i class="fas fa-search"></i>
            </a>
            <a href="account.php" class="icon-link">
                <i class="fas fa-user"></i>
            </a>
            <a href="cart.php" class="icon-link">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count">0</span>
            </a>
        </div>
    </div>
</nav>

<script>
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
    this.classList.toggle('active');
});
</script>
