let value = JSON.parse(localStorage.getItem("fashionValue"))
let cartData = JSON.parse(localStorage.getItem("cartData")) || []

const appendData = (data, value) => {
    let parent = document.getElementById("product")
    parent.textContent = "";

    data.map(el => {
        if (el.type == value) {
            let div = document.createElement("div")
            div.setAttribute("class", "child")


            let image = document.createElement("img")
            image.setAttribute("src", el.image_url)

            let name = document.createElement("h4")
            name.textContent = el.name

            let desc = document.createElement("p")
            desc.setAttribute("class", "grey")
            desc.textContent = el.desc

            let o_price = document.createElement("span")
            o_price.setAttribute("class", "price")
            o_price.textContent = ` ₹ ${el.price}`

            let s_price = document.createElement("span")
            s_price.setAttribute("class", "grey")
            s_price.setAttribute("class", "line-through")
            s_price.textContent = el.strikedoffprice



            let button = document.createElement("button")
            button.setAttribute("class", "btn")
            button.textContent = "Add to Cart"
            button.addEventListener("click", () => {
                cartData.push(el);
                localStorage.setItem("cartData", JSON.stringify(cartData))
                window.location.href = "/cartPage.html"
            })
            div.append(image, name, desc, o_price, s_price, button)
            parent.append(div)
        }
    })

}

let fashionData = JSON.parse(localStorage.getItem("allFashionData"))

appendData(fashionData, value)

const sort = () => {
    let sortValue = document.getElementById("select").value
    console.log(sortValue)
    let filterValue = document.getElementById("brand").value
    let updateData;
    const filterfunction = (prod) => {
        if (filterValue == "Adidas") {
            return prod.brand = "Adidas"
        }
        else if (filterValue == "Reebok") {
            return prod.brand = "Reebok"
        }
        else {
            return true
        }
    }

    if (sortValue != "") {
        updateData = fashionData.filter(filterfunction).sort((a, b) => {
            if (sortValue == "asse") {
                return a.price - b.price
            }
            else if (sortValue == "desce") {
                return b.price - a.price
            }
            else {
                return fashionData;
            }
        })
    }
    else {
        updateData = fashionData.filter(filterfunction)
    }


    appendData(updateData, value)
}



const filter = () => {
    let sortValue = document.getElementById("select").value
    let filterValue = document.getElementById("brand").value
    console.log(filterValue)
    let updateData;
    const filterfunction = (prod) => {
        if (filterValue == "Adidas") {
            return prod.brand == "Adidas"
        }
        else if (filterValue == "Reebok") {
            return prod.brand == "Reebok"
        }
        else {
            return true
        }
    }

    if (sortValue != "") {
        updateData = fashionData.filter(filterfunction).sort((a, b) => {
            if (sortValue == "asse") {
                return a.price - b.price
            }
            else if (sortValue == "desce") {
                return b.price - a.price
            }
            else {
                return fashionData;
            }
        })
    }
    else {
        updateData = fashionData.filter(filterfunction)
    }


    appendData(updateData, value)
}




// sort and filter 



