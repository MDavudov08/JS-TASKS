const cards = document.querySelector(".cards");
const url = 'https://dummyjson.com/products'

const request = new XMLHttpRequest();
request.open("GET", url);
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        const data = JSON.parse(request.response)
        data.products.forEach(({ title,description,price,brand,images }) => {
            cards.innerHTML += `
            <div class="card">
                <div class="image">
                    <img src="${images[2]}" alt="">
                </div>
                <div class="text">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <h3>${brand}</h3>
                    <p>${price}$</p>
                </div>
                <div class="star-wrapper">
                    <a href="#" class="fas fa-star s1"></a>
                    <a href="#" class="fas fa-star s2"></a>
                    <a href="#" class="fas fa-star s3"></a>
                    <a href="#" class="fas fa-star s4"></a>
                    <a href="#" class="fas fa-star s5"></a>
                </div>
            </div>
            `
        });
    }
}

request.send()