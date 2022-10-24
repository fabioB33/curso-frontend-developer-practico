const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const MenuHam= document.querySelector('.menu')
const mobileMenu= document.querySelector('.mobile-menu')
const carritoMenu= document.querySelector('.navbar-shopping-cart')
const shoppingCart= document.querySelector('#shoppingCartContainer')
const cards= document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleMenu);
MenuHam.addEventListener('click', toggleMobile);
carritoMenu.addEventListener('click', toggleCarrito);

function toggleMobile(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMenu(){
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleCarrito(){
    const mobileMenuClosed= mobileMenu.classList.contains('inactive')
    
    
    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Computer',
    price:300,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        
});

// <!-- <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div> -->


for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    productCard.classList.add('product-card');

    const productPrice = document.createElement('p');
    productPrice = innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerHTML = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');   

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cards.appendChild(productCard);
}