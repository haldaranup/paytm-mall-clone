


let Data = JSON.parse(localStorage.getItem("productData"))
let url = JSON.parse(localStorage.getItem("voucher"))

function mapping_data(Data) {
    document.querySelector("#product_products").textContent = ""
    Data.map(function (elm) {
        var div = document.createElement("div");
        div.setAttribute("class", "product_div");

        var image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("width", "100%");
        image.setAttribute("height", "50%");


        var name = document.createElement("p")
        name.textContent = elm.product_name;
        name.style.color = "gray"
        name.style.fontSize = "15px"


        var mrp = document.createElement("p")
        mrp.textContent = '₹ ' + elm.mrp;
        mrp.style.fontSize = "18px"
        mrp.style.fontWeight = "bold"

        var cashback = document.createElement("p")
        cashback.textContent = 'Buy for ₹ ' + elm.mrp * .88;
        cashback.style.fontSize = "15px"
        cashback.style.color = "red"
        cashback.style.fontWeight = "bold"

        var withcashback = document.createElement("p")
        withcashback.textContent = 'with cashback';
        withcashback.style.fontSize = "13px"
        withcashback.style.color = "gray"


        div.append(image, name, mrp, cashback, withcashback);


        document.querySelector("#product_products").append(div);
        div.addEventListener('click', () => {
            localStorage.setItem('price', JSON.stringify(elm.mrp));
            window.location.href = "/checkout.html"
        })
    })
}
mapping_data(Data)


const sortData = () => {
    let value = document.getElementById("sort").value
    console.log(value)
    let data;
    if (value == "ltoh") {
        data = Data.sort((a, b) => {
            return a.mrp - b.mrp
        })
    }
    else if (value == "htol") {
        data = Data.sort((a, b) => {
            return b.mrp - a.mrp
        })
    }
    else {
        data = Data
    }
    mapping_data(data)
}






