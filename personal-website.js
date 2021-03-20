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

    const funFactBtn = document.querySelector(".fun");
    funFactBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const randomFactP = document.querySelector(".fact-statement");
      factArray = [
        ": I use to do k-pop choreography",
        ": I use to go to nature trails and take photos of animals",
        ": I traveled the whole Bayside area just to try every restaurant",
        ": I've explored multiple abandoned areas in NYC",
        ": I've done cosplay for an anime convention",
        ": I've won 5 plushies in disneyland",
        ": I've made my own ice cream",
        ": I've done kickboxing and Jeet Kune Do",
      ];
      let randomFact = "";
      for (let i = 0; i < factArray.length; i++) {
        min = Math.ceil(0);
        max = Math.floor(factArray.length - 1);
        let randomN = Math.floor(Math.random() * (max - min + 1) + min);
        randomFact = factArray[randomN];
      }
      randomFactP.textContent = randomFact;
    });

})
