console.log("Working....")

let colorChangeBtn = document.getElementById("colorChangeBtn");
let colorEl = document.getElementById("color");
let body = document.getElementsByTagName("body")[0];


function getColor(){
    let color = `rgb(`
    for(let i = 0;i<4; i++){
        if(i === 3){
            color += `${(Math.random())})`;

        }else{

            color += `${Math.floor(Math.random()*255)},`;
        }


    }

    // let g = Math.floor(Math.random()*255);
    // let b = Math.floor(Math.random()*255);

    return color
}

colorChangeBtn.addEventListener("click", ()=>{
    let color = getColor();
    body.style.backgroundColor = color;
    colorEl.textContent = color;
})