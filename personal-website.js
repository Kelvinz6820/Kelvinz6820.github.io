document.addEventListener("DOMContentLoaded", () => {
    let aboutButton = document.querySelector("#aboutMe")
    aboutButton.addEventListener("click", () => {
        let aboutMeSection = document.querySelector(".aboutMePage")
        aboutMeSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })

    let projectsButton = document.querySelector("#projects")
    projectsButton.addEventListener("click", () => {
        let projectSection = document.querySelector("#project-header")
        projectSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })

    
    let contactButton = document.querySelector("#contactMe")
    contactButton.addEventListener("click", () => {
        let contactSection = document.querySelector("#contact-header")
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })

    let projectsButton2 = document.querySelector("#projects2")
    projectsButton2.addEventListener("click", () => {
        let projectSection2 = document.querySelector("#project-header")
        projectSection2.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })

    let contactButton2 = document.querySelector("#contactMe2")
    contactButton2.addEventListener("click", () => {
        let contactSection2 = document.querySelector("#contact-header")
        contactSection2.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })

    let contactButton3 = document.querySelector("#contactMe3")
    contactButton3.addEventListener("click", () => {
        let contactSection3 = document.querySelector("#contact-header")
        contactSection3.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    })



})
