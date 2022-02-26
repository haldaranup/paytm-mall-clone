

let click = document.querySelectorAll(".click")
// console.log(click)
click.forEach(el => {
    el.addEventListener("click", () => {

        localStorage.setItem("voucher", JSON.stringify(el.ariaValueText))
        window.location.href = "product.html"

        // console.log(el.ariaValueText)

    })
})





