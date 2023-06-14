import React from 'react'
import TopicCard from '../TopicCard/TopicCard'

function SearchResult() {
    return (
        <div className='container-fluid my-3'>
            <main className="container overflow-hidden px-0">
            <h4 className='fw-semibold'>{`"24"`} Web Topics Found</h4>
            <ul className="row gx-4 gy-5 list-unstyled  row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
                <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith"/>
            </ul>
        </main>
        </div>
    )
}

export default SearchResult