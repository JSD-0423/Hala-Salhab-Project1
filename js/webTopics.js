import { ml } from "./nestedHtml.js";

async function fetchWebTopics() {
    let spinner = document.getElementById("spinner");
    let cardsContainer = document.getElementById('cards');
    let webTopicsContainer = document.querySelector('main');
    let showLoadingRestule = document.getElementById('loading-status');
    //show  spinner when loading
    spinner.style.display = "block";

    //hide container to give loading effect
    webTopicsContainer.style.display = "none";

    try {
        //fetch web topics
        const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
        let data = await response.text();
        let topics = JSON.parse(data)
        //create DOM cards
        topics.forEach(element => {
            let card = ml("li", { id: element.id },
                ml("div", { class: "card border-0 shadow-sm h-100" }, [
                    ml("img", { src: `./Logos/${element.image}`, class: "card-img-top h-50", alt: element.image }),
                    ml("div", { class: "card-body text-truncate" }, [ml("small", { class: "text-body-secondary" },
                        ml("a", { class: "text-decoration-none text-truncate" }, "Web Development Languages")),
                    ml("h5", { class: "card-title" }, element.topic)]),
                    ml("div", { class: "card-body" }, [
                        ml("div", { class: "raiting" }, [
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" })
                        ]),
                        ml("p", { class: "card_text" }, element.name)
                    ])]));

            cardsContainer.appendChild(card)
        });
        spinner.style.display = "none";
        webTopicsContainer.style.display = "block";
    } catch (error) {
        spinner.style.display = "none";
        showLoadingRestule.innerHTML = 'Something went wrong. Web topics failed to load';
    }

}

fetchWebTopics();