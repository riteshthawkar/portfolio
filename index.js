

const menuTogglerOpen = document.querySelector('.toggleMenu');
const menuTogglerClose = document.querySelector('.toggleclose');
const navbar = document.querySelector('.navbar');

menuTogglerOpen.addEventListener("click", ()=>{
    navbar.setAttribute('data-visible', 'true');
    menuToggler.setAttribute('aria-expanded', 'true');
});

menuTogglerClose.addEventListener("click", ()=>{

    navbar.setAttribute('data-visible', 'false');
    menuToggler.setAttribute('aria-expanded', 'false');
});


navlinks = document.querySelectorAll(".nav-item a");

navlinks.forEach(element => {
    element.addEventListener("click", ()=>{
        let visibility = navbar.getAttribute('data-visible');

        if (visibility === 'true'){
            navbar.setAttribute('data-visible', 'false');
            menuToggler.setAttribute('aria-expanded', 'false');
        }else{
            navbar.setAttribute('data-visible', 'true');
            menuToggler.setAttribute('aria-expanded', 'true');
        }
    })
});


const counters = document.querySelectorAll(".project-count");

for (let i = 0; i < counters.length; i++) {
    counters[i].innerHTML = "0"+(i+1);
}


// document.querySelector(".mode-toggle").addEventListener("click", ()=>{
//     if (document.querySelector(".mainContainer").classList.contains("light-mode")){
//         document.querySelector(".mainContainer").classList.remove("light-mode");
//         document.querySelector(".mainContainer").classList.add("dark-mode");
//     }else{
//         document.querySelector(".mainContainer").classList.remove("dark-mode");
//         document.querySelector(".mainContainer").classList.add("light-mode");
//     }
// })