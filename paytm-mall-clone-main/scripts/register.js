



const signin = async (event) => {
    event.preventDefault()

    try {
        let user_data = {
            name: document.querySelector(".name").value,
            email: document.querySelector(".email").value,
            password: document.querySelector(".password").value,
            username: document.querySelector(".username").value,
            mobile: document.querySelector(".mobile").value,
            description: document.querySelector(".description").value
        }
        // console.log(user_data)
        if (user_data.name != "" && user_data.email != "" && user_data.password != "" && user_data.username != "" && user_data.mobile != "" && user_data.description != "") {
            user_data = JSON.stringify(user_data)

            let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
                method: "POST",
                body: user_data,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json()
            console.log(data)
            window.location.href = "login.html"
        }
        else {
            alert("enter valid details")
        }
    }
    catch (err) {
        console.log("err", err)
    }


}
document.querySelector("form").addEventListener("submit", signin)