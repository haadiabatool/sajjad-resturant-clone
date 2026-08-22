window.onload = function() {

// When click on do-darya do-darya site open
const pagedodarya=
    document.getElementById('page-do-darya')

pagedodarya.addEventListener("click",()=>{
    window.location.href="do-darya.html";
});

// When click on sukkur , sukkur site open
const pagesukkur=
    document.getElementById('page-sukkur')

pagesukkur.addEventListener("click",()=>{
    window.location.href="sukkur.html";
});

// Change color of Navbar during scroll

const navbar=
    document.getElementById('navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-black");
    }else{
        navbar.classList.remove("bg-black");
        navbar.classList.add("bg-transparent");
    }
    
});

};