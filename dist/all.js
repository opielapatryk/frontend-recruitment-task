const button=document.querySelector("button"),alertBox=document.querySelector(".alert"),svg=document.querySelector("svg"),notBox=document.querySelectorAll(".not-box");button.addEventListener("click",()=>{alertBox.style.display="flex"}),svg.addEventListener("click",()=>{alertBox.style.display="none"}),document.addEventListener("click",()=>{notBox.forEach(e=>{e!=notBox&&(alertBox.style.display="none")})});