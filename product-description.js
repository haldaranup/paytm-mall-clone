function mrpmap() {
    console.log(this.value)
    var selected = this.value
    document.querySelector("#total").textContent = "";
    document.querySelector("#total").textContent = selected*obj1.mrp;
}

var selected = document.querySelector("#quantity").value||'1';
document.querySelector('#quantity').addEventListener('change', mrpmap)




var obj1 = JSON.parse(localStorage.getItem('product'));
var image = document.createElement("img");
image.setAttribute("src", obj1.imglink);
image.setAttribute("width", "100%");
document.querySelector("#pdt_image").append(image);


var tag1 = document.createElement("p")
tag1.textContent = obj1.product_name;
tag1.style.color = "black"
tag1.style.fontSize = "18px"
var mrp = document.createElement("p")
mrp.textContent = 'MRP ₹ ' + obj1.mrp;
mrp.style.fontSize = "22px"

var mrp_footer = document.createElement("p")
mrp_footer.textContent = 'Inclusive of all Taxes';
mrp_footer.style.fontSize = "8px"

document.querySelector("#pdt_data").append(tag1, mrp, mrp_footer);

document.querySelector("#total").textContent = obj1.mrp;

var highlight = document.createElement("ul")

obj1.pdt_highlights.forEach(element => {
    var point = document.createElement("li")
    point.textContent = element
    highlight.append(point)
});




document.querySelector("#pdt_highlights").append(highlight);


