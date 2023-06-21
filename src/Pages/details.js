import React from 'react'
import TopicDetails from '../Components/TopicDetails/TopicDetails'
import FavoriteCard from '../Components/FavoriteCard/FavoriteCard'
import Table from '../Components/Table/Table'
import { useParams } from 'react-router-dom';
import useApiRequest from '../API/useApiRequest';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';


function Details({ loadingMessage }) {
  const { id } = useParams();
  const { data, loading, error } = useApiRequest(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
  console.log("inside", id, data)

  return (
    <main className="container-fluid p-0 position-relative">
      <div className="details-container">
        {data ? (
          <div>
            <TopicDetails category={data.category} topic={data.topic} description={data.description} rating={data.rating} />
            <FavoriteCard topic={data.topic} image={data.image} name={data.name} />
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