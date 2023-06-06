export const debounce = (func, delay) => {
    let debounceTimer;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
    
}
