const list = document.querySelector(".list__card");
let innerHTML = ``;
function product() {
    fetch(`https://60ae0d5e80a61f00173324bc.mockapi.io/products`)
        .then((response) => { return response.json() })
        .then((data) => {
            let listProduct = [];
            for (let i = 0; i < data.length; i++) {
                listProduct.push(data[i]);
            }
            list.innerHTML = ``;
            for (let i = 0; i < listProduct.length; i++) {
                innerHTML += `
                <div class="card">
                    <div class="card__img">
                        <img src="${listProduct[i].image}" alt="poster">
                    </div>
                    <div class="card__content">
                        <div class="card__name">
                            Name : ${listProduct[i].name}
                        </div>
                        <div class="card__error">
                            Error: ${listProduct[i].errorDescription}
                        </div>
                        <div>
                            SKU: ${listProduct[i].sku}
                        </div>
                        <div>
                            ID: ${listProduct[i].id}
                        </div>
                        <div>
                            Color: ${listProduct[i].color}
                        </div>
                    </div>
                </div>
                `;
                // console.log(listProduct[i].errorDescription);
            }
            list.innerHTML += innerHTML;
        })
        .catch((err) => {
            console.log(err);
            console.log("Error!!!");
        });
}
product();