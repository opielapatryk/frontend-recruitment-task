const button=document.querySelector("button"),alertBox=document.querySelector(".alert"),svg=document.querySelector("svg"),header=document.getElementById("header"),buttonText=document.querySelector("#button-text"),box=document.querySelector("#box"),para=document.querySelector("#para");button.addEventListener("click",()=>{alertBox.style.display="flex"}),svg.addEventListener("click",()=>{alertBox.style.display="none"}),document.addEventListener("click",e=>{e.target!=button&&e.target!=buttonText&&e.target!=box&&e.target!=para&&e.target!=header&&(alertBox.style.display="none")});