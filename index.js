function showHideFav() {
    var favourites = document.getElementById("favourite");
    if (favourites.style.display === "none") {
        favourites.style.display = "block";
    } else {
        favourites.style.display = "none";
    }
}

function toggleDarkMode() {
    var body_style = document.body.style;
    var header_style = document.querySelector("header").style;
    var textButtons = document.getElementsByClassName("text-button");
    var banner_style = document.getElementById("banner").style;
    var searchBar_style = document.getElementById("search-bar").style;
    var result_cards = document.getElementsByClassName("card");
    var main_container = document.getElementsByClassName("container");
    var favourite_style = document.getElementById("favourite").style;

    if (body_style.color == "var(--body-text)") {
        body_style.color = "var(--body-text-dark)";
        header_style.backgroundColor = "var(--bg_default-dark)";
        textButtons[0].style.border = " 1px solid var(--lines-color-dark)";
        textButtons[0].style.color = "var(--body-text-dark)";
        textButtons[1].style.border = " 1px solid var(--lines-color-dark)";
        textButtons[1].style.color = "var(--body-text-dark)";
        banner_style.backgroundColor = "var(--bg_default-dark)";
        searchBar_style.backgroundColor = "var(--bg_default-dark)";
        main_container[1].style.backgroundColor = "var(--bg_body-dark)";
        searchBar_style.boxShadow = "none";
        favourite_style.backgroundColor = "var(--bg_default-dark)"
        for (let i = 0; i < result_cards.length; i++) {
            result_cards[i].style.backgroundColor = "var(--bg_default-dark)";
            result_cards[i].style.boxShadow = "none"
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
        searchBar_style.backgroundColor = "var(--bg_default)";
        main_container[1].style.backgroundColor = "var(--bg_body)";
        searchBar_style.boxShadow = "none";
        favourite_style.backgroundColor = "var(--bg_default)"
        for (let i = 0; i < result_cards.length; i++) {
            result_cards[i].style.backgroundColor = "var(--bg_default)";
            result_cards[i].style.boxShadow = "box-shadow: 10px 0 0 0 rgba(191, 190, 190, 0.25)"
        }
    }

}