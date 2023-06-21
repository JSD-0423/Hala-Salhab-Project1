import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import Details from './Pages/details'
import Header from '../src/Components/Header/header'
import Banner from '../src/Components/Banner/Banner'
import Footer from '../src/Components/Footer/Footer'
import useApiRequest from './API/useApiRequest'
import { useState, useEffect } from 'react';



function App() {
  const { data, loading, error } = useApiRequest('https://tap-web-1.herokuapp.com/topics/list');
  const [dataCount, setDataCount] = useState();
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [resultMessage, setResultMessage] = useState('Web Topics Found');
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Web topics failed to load.');
  const [categories, setCategories] = useState();
  const [sortOptions, setSortOptions] = useState(['Topic Title', 'Author Name'])

console.log(data)
  useEffect(() => {
    if (data) {
      setDataCount(data.length);
      let categories = [... new Set(data.map((topic) =>{
        return topic.category;
    }))];
    setCategories(categories);
    }
    console.log(categories) 
  }, [data]);

  return (
    <div>
      <Header />
      <Banner />
      <Router>
        <Routes>
          <Route path="/Hala-Salhab-Project1" element={<Home data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage} filterOptions={categories} sortOptions={sortOptions}/>} />
          <Route path="/Hala-Salhab-Project1/details/:id" element={<Details loadingMessage={loadingMessage} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
