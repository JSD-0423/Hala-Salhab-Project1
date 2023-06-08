
function showHideFav() {
    let favourites = document.getElementById("favourite");
    if (favourites.style.display === "") {
        favourites.style.display = "block";
    } else if (favourites.style.display == "block") {
        favourites.style.display = "";
    }
}