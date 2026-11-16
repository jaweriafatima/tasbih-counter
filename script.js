

let count = 0 ;

let countBtn = document.getElementById("countBtn");
let reset = document.getElementById("resetBtn");
let Display = document.getElementById("count");


 countBtn.addEventListener("click", function() {
    count++;
    Display.innerText = count;
 });

 reset.addEventListener("click", function() {
    count = 0;
    Display.innerText = count;
 });


 