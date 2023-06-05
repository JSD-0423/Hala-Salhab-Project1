function showHideFav() {
    let favourites = document.getElementById("favourite");
    if (favourites.style.display === "") {
        favourites.style.display = "block";
    } else if(favourites.style.display == "block"){
        favourites.style.display = "";
    }
}

// function toggleDarkMode() {
//     let body_style = document.body.style;
//     let header_style = document.querySelector("header").style;
//     let textButtons = document.getElementsByClassName("text-button");
//     let banner_style = document.getElementById("banner").style;
//     let searchBar_style = document.getElementById("search-bar").style;
//     let result_cards = document.getElementsByClassName("card");
//     let card_text_body_secondary = document.querySelectorAll("a")
//     let filter = document.getElementById('filter');
//     let sort = document.getElementById('sort');
//     let favourite_style = document.getElementById("favourite").style;
    
//     if (body_style.color == "var(--body-text)") {
//         filter.style.backgroundColor = "var(--bg_default-dark)";
//         filter.style.color = "var(--body-text-dark)";
//         sort.style.backgroundColor = "var(--bg_default-dark)";
//         sort.style.color = "var(--body-text-dark)";
//         body_style.color = "var(--body-text-dark)";
//         header_style.backgroundColor = "var(--bg_default-dark)";
//         textButtons[0].style.border = " 1px solid var(--lines-color-dark)";
//         textButtons[0].style.color = "var(--body-text-dark)";
//         textButtons[1].style.border = " 1px solid var(--lines-color-dark)";
//         textButtons[1].style.color = "var(--body-text-dark)";
//         banner_style.backgroundColor = "var(--bg_default-dark)";
//         searchBar_style.backgroundColor = "var(--bg_default-dark)";
//         body_style.backgroundColor = "var(--bg_body-dark)";
//         searchBar_style.boxShadow = "none";
//         favourite_style.backgroundColor = "var(--bg_default-dark)"
//         for (let card of result_cards) {
//             card.style.backgroundColor = "var(--bg_default-dark)";
//             card.style.boxShadow = "none";
//             card.style.color = "var(--body-text-dark)";
//         }
//         for (let text of card_text_body_secondary) {
//             text.style.color = "var(--body-text-dark)";
//         }
//     }
//     else {
//         body_style.color = "var(--body-text)"
//         header_style.backgroundColor = "var(--bg_default)";
//         filter.style.backgroundColor = "var(--bg_default)";
//         filter.style.color = "var(--body-text)";
//         sort.style.backgroundColor = "var(--bg_default)";
//         sort.style.color = "var(--body-text)";
//         textButtons[0].style.border = " 1px solid var(--lines-color)";
//         textButtons[0].style.color = "var(--body-text)";
//         textButtons[1].style.border = " 1px solid var(--lines-color)";
//         textButtons[1].style.color = "var(--body-text)";
//         banner_style.backgroundColor = "var(--bg_default)";
//         searchBar_style.backgroundColor = "var(--bg_default)";
//         body_style.backgroundColor = "var(--bg_body)";
//         searchBar_style.boxShadow = "none";
//         favourite_style.backgroundColor = "var(--bg_default)"
//         for (let card of result_cards) {
//             card.style.backgroundColor = "var(--bg_default)";
//             card.style.boxShadow = "box-shadow: 10px 0 0 0 rgba(191, 190, 190, 0.25)"
//             card.style.color = "var(--body-text)";
//         }
//         for (let text of card_text_body_secondary) {
//             text.style.color = "var(--body-text)";
//         }
//     }

// }

function toggleDarkModeDetails(){
    let body_style = document.body.style;
    let header_style = document.querySelector("header").style;
    let textButtons = document.getElementsByClassName("text-button");
    let banner_style = document.getElementById("banner").style;
    let topics_table_style = document.getElementById("topics-table").style;
    let result_cards = document.getElementsByClassName("card");
    let favourite_style = document.getElementById("favourite").style;

    if (body_style.color == "var(--body-text)") {
        body_style.color = "var(--body-text-dark)";
        header_style.backgroundColor = "var(--bg_default-dark)";
        textButtons[0].style.border = " 1px solid var(--lines-color-dark)";
        textButtons[0].style.color = "var(--body-text-dark)";
        textButtons[1].style.border = " 1px solid var(--lines-color-dark)";
        textButtons[1].style.color = "var(--body-text-dark)";
        banner_style.backgroundColor = "var(--bg_default-dark)";
        body_style.backgroundColor = "var(--bg_body-dark)";
        topics_table_style.backgroundColor="var(--bg_default-dark)";
        topics_table_style.color="var(--body-text-dark)";
        favourite_style.backgroundColor = "var(--bg_default-dark)";
        for (let card of result_cards) {
            card.style.backgroundColor = "var(--bg_default-dark)";
            card.style.boxShadow = "none";
            card.style.color = "var(--body-text-dark)";
        }
    }
    else {
        body_style.color = "var(--body-text)"
        header_style.backgroundColor = "var(--bg_default)";
        textButtons[0].style.border = " 1px solid var(--lines-color)";
        textButtons[0].style.color = "var(--body-text)";
        textButtons[1].style.border = " 1px solid var(--lines-color)";
        textButtons[1].style.color = "var(--body-text)";
        banner_style.backgroundColor = "var(--bg_default)";
        body_style.backgroundColor = "var(--bg_body)";
        topics_table_style.backgroundColor="var(--bg_default)";
        topics_table_style.color="var(--body-text)";
        favourite_style.backgroundColor = "var(--bg_default)"
        for (let card of result_cards) {
            card.style.backgroundColor = "var(--bg_default)";
            card.style.boxShadow = "box-shadow: 10px 0 0 0 rgba(191, 190, 190, 0.25)"
            card.style.color = "var(--body-text)";
        }
    }
}