import React from 'react'
import TopicCard from '../TopicCard/TopicCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
function SearchResult({ data, loading, error, loadingMessage }) {
    console.log(data)
    if (error) {
        return <div className='container-fluid my-3'>
            <main className="container overflow-hidden px-0">
                <h4 className='fw-semibold'>Something went wrong. Web topics failed to load.</h4>
            </main>
        </div>
    }
    if (loading) {
        return <div className='container-fluid my-3'>
            <main className="container overflow-hidden px-0">
                <LoadingSpinner loadingMessage={loadingMessage} />
            </main>
        </div>
    }

    return (
        <div className='container-fluid my-3'>
            <main className="container overflow-hidden px-0">
                <h4 className='fw-semibold'>{`"24"`} Web Topics Found</h4>
                {data ? (
                    <ul className="row g-4 list-unstyled row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                        {data.map(topic => {
                            return <li key={topic.id}>
                                <TopicCard category={topic.category} topic={topic.topic} author={topic.name} image={topic.image} />
                            </li>
                        })}
                    </ul>
                ) : (
                    <p>No data available.</p>
                )

                }
                {/* <ul className="row g-4 list-unstyled row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                    <li> <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith" /></li>
                    <li> <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith" /></li>
                    <li> <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith" /></li>
                    <li> <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith" /></li>
                    <li> <TopicCard catergory="Web Development Languages" topic="HTML" author="Sarah Smith" /></li>
                </ul> */}
            </main>
        </div>
    )
}

export default SearchResult