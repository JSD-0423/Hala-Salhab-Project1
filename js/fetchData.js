export const fetchData = async (url) =>{
    return fetch(url).then(res => {
        return res.json()})
        .catch(e =>{
console.log(e)
        })
        
}