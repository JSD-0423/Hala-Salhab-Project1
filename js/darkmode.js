const toggleModeBtn = document.querySelector('#toggle-theme');
let pageTheme = document.body;
// const toggleTheme = () => {
// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// const header = document.getElementById("header")
// const currentTheme = localStorage.getItem("theme");
// console.log({currentTheme})
// if (currentTheme == "dark") {
//     // ...let's toggle the .dark-theme class on the body
//     header.classList.toggle("dark-mode");
//     console.log(header.classList)
//   // Otherwise, if the user's preference in localStorage is light...
//   } else if (currentTheme == "light") {
//     // ...let's toggle the .light-theme class on the body
//     header.classList.toggle("light-mode");
//   }
//   if (prefersDarkScheme.matches) {
//     // ...then toggle the light mode class
//     header.classList.toggle("light-mode");
//     console.log(header.classList)
//     // ...but use .dark-mode if the .light-mode class is already on the body,
//     var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
//   } else {
//     // Otherwise, let's do the same thing, but for .dark-mode
//     header.classList.toggle("dark-mode");
//     var theme = header.classList.contains("dark-mode") ? "dark" : "light";
//   }
//   // Finally, let's save the current preference to localStorage to keep using it
//   localStorage.setItem("theme", theme);
// }
function checkTheme(){
 //checking prefrence mode
 const currentTheme = localStorage.getItem("theme");

 if(currentTheme == "dark"){
    pageTheme.classList.toggle('dark-mode');  
 } else if(currentTheme == "light"){
    pageTheme.classList.toggle('light-mode');  
 }
}

function toggleTheme(){
let theme;
console.log(pageTheme.classList.contains("light-mode"), pageTheme.classList.contains("dark-mode"))
if(pageTheme.classList.contains("light-mode")){
    pageTheme.classList.toggle("dark-mode");  
    theme = pageTheme.classList.contains("light-mode") ? "dark" : "light";
} else  if(pageTheme.classList.contains("dark-mode")){
    pageTheme.classList.toggle("light-mode");
    console.log(theme, pageTheme.classList.contains("light-mode"))
    theme = pageTheme.classList.contains("dark-mode") ? "light" : "dark";
}

    // if(pageTheme.classList.contains("dark-mode")){
    //     pageTheme.classList.toggle("light-mode");
    //     console.log(theme, pageTheme.classList.contains("light-mode"))
    //     theme = pageTheme.classList.contains("light-mode") ? "light" : "dark";
    // }else if(pageTheme.classList.contains("light-mode")){
    //     pageTheme.classList.toggle("dark-mode");  
    //     theme = pageTheme.classList.contains("dark-mode") ? "dark" : "light";
    // }
    console.log(theme)

  localStorage.setItem("theme", theme);
}
checkTheme()    
toggleModeBtn.addEventListener("click", toggleTheme);
