
export const  goToDetailsPage= (topicId) => {
    // event.preventDefault()
    // Generate the details page URL with the topicId as a parameter
    let detailsPageURL = 'details.html?topicId=' + encodeURIComponent(topicId);
    // Navigate to the details page
    window.location.href = detailsPageURL;
}
