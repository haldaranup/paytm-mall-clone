function mrpmap() {
    var selected = this.value
    document.querySelector("#total").textContent = selected * obj1.mrp;
}

var selected = document.querySelector("#quantity").value || '1';
document.querySelector('#quantity').addEventListener('change', mrpmap)


var obj1 = JSON.parse(localStorage.getItem('product'));
var image = document.createElement("img");
image.setAttribute("src", obj1.imglink);
image.setAttribute("width", "100%");
document.querySelector("#pdt_image").append(image);


var tag1 = document.createElement("p")
tag1.textContent = obj1.product_name;
tag1.style.fontWeight = 250
tag1.style.fontSize = "20px"
tag1.style.color = "black"
var mrp = document.createElement("p")
document.querySelector("#MRP").textContent = '₹' +obj1.mrp



document.querySelector("#pdt_data").append(tag1);

document.querySelector("#total").textContent = obj1.mrp;

var highlight = document.createElement("ul")
obj1.pdt_highlights.forEach(element => {
    var point = document.createElement("li")
    point.textContent = element
    point.style.fontSize='13px'
    point.style.padding='5px'
    point.style.color="#666666"
    highlight.append(point)
});




document.querySelector("#pdt_highlights").append(highlight);


