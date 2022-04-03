

const login = async () => {
    try {
        let user_data = {
            username: document.querySelector(".username").value,
            password: document.querySelector(".password").value
        }
        // console.log(user_data)

        let user_data_json = JSON.stringify(user_data)

        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: user_data_json,
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await res.json()
        data = data.token
        console.log(data)
        findProfile(data, user_data)
    }
    catch (err) {
        console.log("err", err)
    }
}

const findProfile = async (data, name) => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${name.username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data}`
        }
    })
    let data1 = await res.json()
    let arr = JSON.parse(localStorage.getItem("userData")) || []
    for (i = 0; i < arr.length; i++) {
        arr.pop()
    }
    // arr.push(data1)
    console.log(data1)

    localStorage.setItem("userData", JSON.stringify(data1))
    window.location.href = "index.html"
}