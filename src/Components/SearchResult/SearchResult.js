import React, { useEffect } from 'react'
import TopicCard from '../TopicCard/TopicCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Link } from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function SearchResult({ data, error, loadingMessage, dataCount, resultMessage, errorMessage, filteredTopics, searchData }) {
    //extract theme 
    const { theme, toggleTheme } = useContext(ThemeContext);
    const searchResPClassName = theme === 'dark'
        ? 'fw-semibold text-white'
        : 'fw-semibold';

    if (filteredTopics.length) {
        return (
            <div className='container-fluid my-3'>
                {
                    <main className="container overflow-hidden px-0">
                        <h4 className={searchResPClassName}>{`"${filteredTopics.length}" ${resultMessage}`}</h4>
                        <ul className="row g-4 list-unstyled row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                            {filteredTopics.map(topic => {
                                return <li key={topic.id}>
                                    <Link to={`/Hala-Salhab-Project1/details/${topic.id}`}><TopicCard id={topic.id} category={topic.category} topic={topic.topic} author={topic.name} image={topic.image} rating={topic.rating} />
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </main>
                }
            </div>
        )
    }

    if (searchData.length) {
        return (
            <div className='container-fluid my-3'>
                {
                    <main className="container overflow-hidden px-0">
                        <h4 className={searchResPClassName}>{`"${searchData.length}" ${resultMessage}`}</h4>
                        <ul className="row g-4 list-unstyled row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                            {searchData.map(topic => {
                                return <li key={topic.id}>
                                    <Link to={`/Hala-Salhab-Project1/details/${topic.id}`}><TopicCard id={topic.id} category={topic.category} topic={topic.topic} author={topic.name} image={topic.image} rating={topic.rating} />
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </main>
                }
            </div>
        )
    }


    if (error) {
        return <main className="container overflow-hidden px-0">
            <h4 className={searchResPClassName+ ' my-3'}>{errorMessage}</h4>
        </main>

    }




    return (
        <div className='container-fluid my-3'>
            {data && dataCount ? (
                <main className="container overflow-hidden px-0">
                    <h4 className={searchResPClassName}>{`"${dataCount}" ${resultMessage}`}</h4>
                    <ul className="row g-4 list-unstyled row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mt-2">
                        {data.map(topic => {
                            return <li key={topic.id}>
                                <Link to={`/Hala-Salhab-Project1/details/${topic.id}`}><TopicCard id={topic.id} category={topic.category} topic={topic.topic} author={topic.name} image={topic.image} rating={topic.rating} />
                                </Link>
                            </li>
                        })}
                    </ul>
                </main>
            ) : (
                <LoadingSpinner loadingMessage={loadingMessage} />
            )

            }
        </div>
    )
}

export default SearchResult