document.querySelector("#form_ship").addEventListener("submit", shipping);
var paytm_Arr = JSON.parse(localStorage.getItem("address")) || [];
function shipping(event) {
    event.preventDefault();
    var fName = document.querySelector("#fname").value;
    var lName = document.querySelector("#lname").value;
    var add1 = document.querySelector("#add1").value;
    var add2 = document.querySelector("#add2").value;
    var country = document.querySelector("#country").value
    var zcode = document.querySelector("#zcode").value;
    var num = document.querySelector("#num").value;

    console.log(fName, lName, add1, add2, country, zcode, num);
    if (fName != "" && lName != "" && add1 != "" && country != "" && zcode != "" && num != "") {
        var paytm_object = {
            first_name: fName,
            last_name: lName,
            address1: add1,
            address1: add2,
            country: country,
            zipcode: zcode,
            mobile_no: num,
        }
        console.log(paytm_object);
        paytm_Arr.push(paytm_object);
        localStorage.setItem("address", JSON.stringify(paytm_Arr));
        window.location.href = "/payment.html"
    }


}