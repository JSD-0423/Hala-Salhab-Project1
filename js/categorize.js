
export const displayCategorize = (topics) =>{
let categories = [... new Set(topics.map((topic) =>{
    return topic.category;
}))];
return categories;

}