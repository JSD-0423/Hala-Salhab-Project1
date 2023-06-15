import React from 'react'
import './TopicDetails.css'
function TopicDetails() {
  return (
    <div className="container-fluid dark-background">
    <div className="details">
        <div className="details-header-wrapper py-4">
            <p className="m-0 fw-medium">Web Development Languages</p>
            <h1>HTML</h1>
            <div className="raiting">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
            </div>
        </div>
        <summary className="list-unstyled pb-4">HTML (Hypertext Markuo Language) is the standard markup
            language for
            creating web
            pages
            and
            other
            information that can be displayed on a web browser. It provides a structure for content
            and
            defines
            how it should be displayes on a web page,
            including text, images, and multimedia, HTML is essential for cearting static web pages
            and
            is
            foundational technology for the World Wide Web.</summary>

    </div>
</div>
  )
}

export default TopicDetails