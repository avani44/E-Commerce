const BASE_URL="http://localhost:8080"

async function loadProducts()
{
    try{
        const response = await fetch(`${BASE_URL}/products`);
        const products= await response.json();
        console.log(products);
        
        let trendingList=document.getElementById("trending-products");
        let clothingList=document.getElementById("clothing-products");
        let electronicsList=document.getElementById("electronics-products");
        let booksList=document.getElementById("Books");
        let accessoriesList=document.getElementById("Accessories-products");
        let homeAppliancesList=document.getElementById("HomeAppliances-products");
        let gamingList=document.getElementById("Gaming-products");

        trendingList.innerHTML="";
        clothingList.innerHTML="";
        electronicsList.innerHTML="";
        booksList.innerHTML="";
        accessoriesList.innerHTML="";
        homeAppliancesList.innerHTML="";
        gamingList.innerHTML="";

        products.forEach((product) => {
            let productCard = `
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100">
                            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="price"><strong>₹${product.price}</strong></p>
                                <button class="btn btn-primary mt-auto"
                                onclick="addToCart(${product.id}, '${product.name}',${product.price},'${product.imageUrl}')">
                                Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
            `;

            if(product.category==="Clothing")
            {
                clothingList.innerHTML+= productCard;
            }
            else if(product.category==="Electronics")
            {
                electronicsList.innerHTML+= productCard;
            }
            else if(product.category==="Books")
            {
                booksList.innerHTML+= productCard;
            }
            else if(product.category==="Home Appliances"){
                homeAppliancesList.innerHTML+= productCard;
            }
            else if(product.category==="Gaming"){
                gamingList.innerHTML+= productCard;
            }
            else if(product.category==="Accessories"){
                accessoriesList.innerHTML+= productCard;
            }
            else {
                trendingList.innerHTML+= productCard;
            }
        });

    }
    catch(error)
    {
        console.log("Erorr fetching products:",error);
        
    }
}
