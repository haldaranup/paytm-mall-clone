
const goTo = () => {
    document.getElementById("button1").innerText = "Processing...."
    setTimeout(() => {
        window.location.href = "/payment.html"
    }, 3000)
}




function mrpmap() {
    var selected = this.value
    document.querySelector("#total").textContent = selected * price;
    localStorage.setItem("price", JSON.stringify(selected * price))
    document.getElementById("button1").addEventListener('click', goTo)
}

var selected = document.querySelector("#quantity").value || '1';
document.querySelector('#quantity').addEventListener('change', mrpmap)


var obj1 = JSON.parse(localStorage.getItem('voucher'));
var image = document.createElement("img");
image.setAttribute("src", obj1);
image.setAttribute("width", "100%");
document.querySelector("#pdt_image").append(image);


let price = JSON.parse(localStorage.getItem("price"))


document.querySelector("#MRP").textContent = '₹' + price





document.querySelector("#total").textContent = price;






