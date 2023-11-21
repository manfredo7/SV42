const services = document.querySelector("#services");
const portafolio = document.querySelector("#portafolio");

/*Menu Servicios */
services.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".services");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/*Menu Portafolio */
portafolio.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".portafolio");
    sectionP.scrollIntoView({behavior: "smooth"});
})