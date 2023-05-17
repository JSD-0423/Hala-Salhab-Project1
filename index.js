function showHideFav() {
    var favourites = document.getElementById("favourite");
    if (favourites.style.display === "none") {
        favourites.style.display = "block";
    } else {
        favourites.style.display = "none";
    }
  }

function toggleDarkMode(){
    var body = document.body;
  body.classList.toggle("dark-mode");
    // document.body.style.color = "var(--body-text-dark)";
}