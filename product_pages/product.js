function sortPrice() {

    var selected = document.querySelector("#short").value;
    document.querySelector("#product_products").textContent = "";
   if (selected == "4") {
        speedo_data.sort(function (a, b) {
            return a.mrp - b.mrp;
        });
    }
    else if (selected == "5") {
        speedo_data.sort(function (a, b) {
            return b.mrp - a.mrp;
        });
    }
    mapping_data(speedo_data)
}

var selected = document.querySelector("#short").value;
document.querySelector('#short').addEventListener('change', sortPrice)


speedo_data = [
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 250,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 2000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 4000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 8000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 15000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },

    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 20000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 45000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo',
        pdt_img_link:'https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0x1920/70/0.jpg?imwidth=320&impolicy=hq'
    },
    {
        product_name: 'Speedo Voucher',
        imglink: "https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAVOUCHER-WORTQWIK8617932A1AA1B9/0.jpg?imwidth=282&impolicy=hq",
        mrp: 50000,
        pdt_highlights: ['Upto 3 GVs can be clubbed together in a single order.', 'Valid at speedo.in.', 'Valid for 1 year.'],
        product_type: 'footwear',
        brand: 'speedo',
        
    },
]


function mapping_data(speedo_data) {
    speedo_data.map(function (elm) {
        var div = document.createElement("div");
        div.setAttribute("class", "product_div");

        var image = document.createElement("img");
        image.setAttribute("src", elm.imglink);
        image.setAttribute("width", "100%");
        image.setAttribute("height", "50%");
        

        var name = document.createElement("p")
        name.textContent = elm.product_name;
        name.style.color = "gray"
        name.style.fontSize = "18px"


        var mrp = document.createElement("p")
        mrp.textContent = '₹ ' + elm.mrp;
        mrp.style.fontSize = "22px"

        var cashback = document.createElement("p")
        cashback.textContent = 'Buy for ₹ ' + elm.mrp * .88;
        cashback.style.fontSize = "20px"
        cashback.style.color = "red"

        var withcashback = document.createElement("p")
        withcashback.textContent = 'with cashback';
        withcashback.style.fontSize = "18px"
        withcashback.style.color = "gray"

        
        div.append(image, name, mrp, cashback, withcashback);
       

        document.querySelector("#product_products").append(div);
        div.addEventListener('click', ()=>{
            localStorage.setItem('product',JSON.stringify(elm));
            window.location.href="product_description_page.html"
          })
    })
}

     

     
mapping_data(speedo_data)


