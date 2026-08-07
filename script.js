
// Animação de entrada ao rolar a página

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";

    observer.observe(section);

});


// Mensagem ao clicar no download

const downloadButton = document.querySelector(".btn");

if(downloadButton){

downloadButton.addEventListener("click", () => {

    console.log("Download do Ps Nico iniciado");

});

}


// Ano automático no rodapé

const footer = document.querySelector("footer p");

if(footer){

    const ano = new Date().getFullYear();

    footer.innerHTML = "© " + ano + " Ps Nico";

}
