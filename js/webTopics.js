import { ml } from "./nestedHtml.js";

export const displayWebTopics=(topics)=> {
    // let cardsContainer = document.getElementById('cards');
        return topics.forEach(element => {
            let card = ml("li", { id: element.id },
                ml("div", { class: "card border-0 shadow-sm h-100", id: `topic-${element.id}` }, [
                    ml("img", { src: `./Logos/${element.image}`, class: "card-img-top h-50", alt: element.image }),
                    ml("div", { class: "card-body text-truncate" }, [ml("small", { class: "text-body-secondary" },
                        ml("a", { class: "text-decoration-none text-truncate", href: `https://tap-web-1.herokuapp.com/topics/details/${element.id}` }, element.category)),
                    ml("h5", { class: "card-title text-truncate" }, element.topic)]),
                    ml("div", { class: "card-body" }, [
                        ml("div", { class: "raiting" }, [
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" }),
                            ml("ion-icon", { name: "star" })
                        ]),
                        ml("p", { class: "card_text" }, `Author: ${element.name}`)
                    ])]));

            // cardsContainer.appendChild(card)
        });
}
