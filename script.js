let hmd = document.querySelector("#hmd");
let hm = document.querySelector('#hm');
let tbtn = document.querySelector('#togglepass');
let psswrd = document.querySelector('#psswrd')



hm.addEventListener('click', () => {
    hmd.classList.toggle("hidden");
});

tbtn.addEventListener("click", ()=>{
    if (psswrd.type === "password"){
        psswrd.type = "text"
    }
    else{
        psswrd.type = "password";
    }
})