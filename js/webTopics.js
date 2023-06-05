import { ml, nester } from "./nestedHtml.js";

async function fetchWebTopics() {
    //show  spinner when loading
    let spinner = document.getElementById("spinner");
    spinner.style.display="block";
    //fetch data
    const data = await fetch("https://tap-web-1.herokuapp.com/topics/list")
    let topics = await data.text();
    topics = JSON.parse(topics);
    let cardsContainer = document.getElementById('cards');
    console.log(topics)
    topics.forEach(element => {
        let card = ml("li", { id: element.id },
        ml("div", { class: "card border-0 shadow-sm h-100" }, [
            ml("img", { src: `./Logos/${element.image}`, class: "card-img-top h-50", alt: element.image }),
            ml("div", { class: "card-body text-truncate" }, [ml("small", { class: "text-body-secondary" },
            ml("a", { class: "text-decoration-none text-truncate"}, "Web Development Languages")),
            ml("h5", {class: "card-title"}, element.topic) ]),
            ml("div", {class: "card-body"}, [
                ml("div", {class: "raiting"}, [
                    ml("ion-icon", {name:"star"}),
                    ml("ion-icon", {name:"star"}),
                    ml("ion-icon", {name:"star"}),
                    ml("ion-icon", {name:"star"})
                ]), 
                ml("p", {class:"card_text"}, element.name)
            ])]));
            
            cardsContainer.appendChild(card)
        });
}

fetchWebTopics();