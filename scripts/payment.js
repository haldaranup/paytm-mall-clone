let card = document.getElementById("card");
let value = card.value;
let btn = document.querySelector("button");
let count = 0
card.addEventListener("keypress", (e) => {
    
    if(e.key == "Enter") {
    btn.style.display = "block";
  }
});

btn.addEventListener("click", () => {
    btn.textContent = "Processing...."
    setTimeout(()=>{
        window.location.href = "feedback.html";
    }, 3000)
    
});
