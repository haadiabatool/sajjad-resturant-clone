// Change color of Navbar during scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("bg-black");

        navbar.classList.remove("bg-transparent");

    } else {

        navbar.classList.remove("bg-black");

        navbar.classList.add("bg-transparent");

    }

});



// For mobile Menu

const menuBtn =
        document.getElementById("menuBtn");

const mobileMenu =
        document.getElementById("mobileMenu");

menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("hidden");
    
});

const mobileLinks =
        document.querySelectorAll(".mobileLink");

mobileLinks.forEach((link)=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.add('hidden');

    })
});

const branchSelect =
     document.getElementById('branchSelect');

    branchSelect.addEventListener('change', function() {

        const selectedPage = this.value;

        if (selectedPage) {

            window.location.href = selectedPage;

        }
    });

// Mobile menu

const branchSelected =
     document.getElementById('branchSelected');

    branchSelected.addEventListener('change', function() {

        const selectedPaged = this.value;

        if (selectedPaged) {

            window.location.href = selectedPaged;

        }
    });