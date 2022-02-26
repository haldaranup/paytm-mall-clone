
const removeItem = (index) => {
    let Data = JSON.parse(localStorage.getItem("cartData"))
    Data.splice(index, 1)
    localStorage.setItem("cartData", JSON.stringify(Data))
    appendData()
    totalPrice()
    window.location.href = "/cartPage.html"
}


const totalPrice = () => {
    let Data = JSON.parse(localStorage.getItem("cartData"))
    let sum = 0;
    for (i = 0; i < Data.length; i++) {
        sum += Data[i].price
    }
    document.getElementById("bag_price").textContent = sum
    document.getElementById("total").textContent = sum
    localStorage.setItem("totalCart", JSON.stringify(sum))

}
totalPrice()

const appendData = () => {
    let Data = JSON.parse(localStorage.getItem("cartData"))
    let container = document.getElementById("container")
    container.textContent = ""

    Data.map((data, index) => {
        let main_div = document.createElement("div")

        let image_div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", data.image_url)

        let details_div = document.createElement("div")

        let name = document.createElement("h4")
        name.textContent = data.name

        let desc = document.createElement("p")
        desc.setAttribute("class", "grey")
        desc.textContent = data.desc

        let o_price = document.createElement("span")
        o_price.setAttribute("class", "price")
        o_price.textContent = ` ₹ ${data.price}`

        let s_price = document.createElement("span")
        s_price.setAttribute("class", "grey")
        s_price.setAttribute("class", "line-through")
        s_price.textContent = ` ₹${data.strikedoffprice}`



        let button = document.createElement("button")
        button.setAttribute("class", "btn")
        button.textContent = `Remove Item `
        button.addEventListener("click", () => {
            removeItem(index)
        })

        image_div.append(image)
        details_div.append(name, desc, o_price, s_price, button)
        main_div.append(image_div, details_div)
        container.append(main_div)
    })
}

document.getElementById("pay").addEventListener("click", () => {
    let price = JSON.parse(localStorage.getItem("totalCart"))
    localStorage.setItem("price", JSON.stringify(price))
    document.getElementById("pay").textContent = "Processing..."
    setTimeout(() => {
        window.location.href = "/address.html"
    }, 2000)
})



appendData()