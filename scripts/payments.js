let card = document.getElementById("card");
let value = card.value;
let btn = document.querySelector("button");
let count = 0
card.addEventListener("keypress", (e) => {

    if (e.key == "Enter") {
        btn.style.display = "block";
    }
});

btn.addEventListener("click", () => {
    btn.textContent = "Processing...."
    setTimeout(() => {
        window.location.href = "/review.html";
    }, 3000)

});

let price = localStorage.getItem("price")
document.getElementById("pay").textContent = `₹ ${price}`