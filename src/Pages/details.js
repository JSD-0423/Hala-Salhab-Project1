import React from 'react'
import TopicDetails from '../Components/TopicDetails/TopicDetails'
import AddToFavorite from '../Components/AddToFavorite/AddToFavorite'
import Table from '../Components/Table/Table'
import { useParams } from 'react-router-dom';
import useApiRequest from '../API/useApiRequest';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';


function Details({ loadingMessage, favoriteTopics, setFavoriteTopics }) {
  const { id } = useParams();
  const { data, loading, error } = useApiRequest(`https://tap-web-1.herokuapp.com/topics/details/${id}`);

  return (
    <main className="container-fluid p-0 position-relative">
      <div className="details-container">
        {data ? (
          <div>
            <TopicDetails category={data.category} topic={data.topic} description={data.description} rating={data.rating} />
            <AddToFavorite rating={data.rating} topic={data.topic} image={data.image} name={data.name} favoriteTopics={favoriteTopics} setFavoriteTopics={setFavoriteTopics}/>
            <Table tableRows={data.subtopics} tableHead={`${data.topic} Sub Topics`}/>
          </div>
        ) : (
          <LoadingSpinner loadingMessage={loadingMessage} />
        )
        }
      </div>
    </main>
  )
}

export default Details