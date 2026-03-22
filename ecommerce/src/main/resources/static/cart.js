let cart = JSON.parse(localStorage.getItem("cart")) || [];
function loadCart()
{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalAmount=0;
    cartItems.innerHTML="";

    cart.forEach((item,index) => {
        let itemTotal=item.price * item.quantity;
        totalAmount+=itemTotal;

        cartItems.innerHTML +=`

            <tr>
                <td><img src="${item.imageUrl}" width="50"></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index},-1)">-</button>
                    ${item.quantity}
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index},1)">+</button>
                </td>
                <td>₹ ${itemTotal}</td>
                <td><button class="btn btn-danger btn-sm" onclick="changeQuantity(${index})">X</button></td>
            </tr>
        `;
    });
    document.getElementById("total-amount").innerText=totalAmount;
}

function addToCart(id,name,price,imageUrl)
{
    console.log("Adding product to cart:",id,name,price,imageUrl);

    price=parseFloat(price);
    let itemIndex=cart.findIndex((item) => item.id===id)
    if(itemIndex!==-1)
    {
        cart[itemIndex].quantity+=1;
    }
    else{
        cart.push({
            id:id,  // for easy tracking
            name: name,
            price: price,
            imageUrl:imageUrl,
            quantity:1
        });      
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCounter();
    
}


function updateCartCounter()
{
    document.querySelector(".cart-badge").innerText=cart.length;
}


function changeQuantity(index,change)
{
    let cart= JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity+=change;
    if(cart[index].quantity<=0) cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
    updateCartCounter();
}

function removeFromCart()
{
    let cart= JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
    updateCartCounter();
}


document.addEventListener("DOMContentLoaded",loadCart);


/*function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function loadCart() {
    let cart = getCart();
    let cartItems = document.getElementById("cart-items");
    let totalAmount = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        cartItems.innerHTML += `
        <tr>
            <td><img src="${item.imageUrl}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                <button onclick="changeQuantity(${index},-1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index},1)">+</button>
            </td>
            <td>₹ ${itemTotal}</td>
            <td>
                <button onclick="removeFromCart(${index})">X</button>
            </td>
        </tr>`;
    });

    document.getElementById("total-amount").innerText = totalAmount;
}

function addToCart(id, name, price, imageUrl) {
    let cart = getCart();
    price = parseFloat(price);

    let index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push({ id, name, price, imageUrl, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
}

function changeQuantity(index, change) {
    let cart = getCart();
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCounter();
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCounter();
}

function updateCartCounter() {
    let cart = getCart();
    let totalQty = 0;

    cart.forEach(item => totalQty += item.quantity);

    document.querySelector(".cart-badge").innerText = totalQty;
}

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    updateCartCounter();
});
*/