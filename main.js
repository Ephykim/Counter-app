
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn  = document.getElementById("increase-btn");
const countEl = document.getElementById("count-el");

let count = 0;

decreaseBtn.addEventListener("click", ()=> {
    count = count - 1;
    countEl.textContent = count;
    if(count < 0){
    countEl.style.color = "red";
    } else if(count === 0){
        countEl.style.color = "#111111";
    }
})

resetBtn.addEventListener("click", ()=>{
    count =  0;
    countEl.textContent = count;
    countEl.style.color = "#111111";
})

increaseBtn.addEventListener("click", ()=>{
    count = count + 1;
    countEl.textContent = count;
    if(count < 0){
        countEl.style.color = "red";
    } else if(count === 0){
        countEl.style.color = "#111111";
    }
    else {
    countEl.style.color = "green";
    }
})
 
