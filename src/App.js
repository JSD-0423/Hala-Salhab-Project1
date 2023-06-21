import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import Details from './Pages/details'
import Header from '../src/Componants/Header/header'
import Banner from '../src/Componants/Banner/Banner'
import Footer from '../src/Componants/Footer/Footer'
import useApiRequest from './API/useApiRequest'
import { useState, useEffect } from 'react';



function App() {
  const { data, loading, error } = useApiRequest('https://tap-web-1.herokuapp.com/topics/list');
  const [dataCount, setDataCount] = useState();
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [resultMessage, setResultMessage] = useState('Web Topics Found');
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Web topics failed to load.');


  useEffect(() => {
    if (data) {
      setDataCount(data.length);
    }
  }, [data]);

  return (
    <div>
      <Header />
      <Banner />
      <Router>
        <Routes>
          <Route path="/Hala-Salhab-Project1" element={<Home data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage}/>} />
          <Route path="/Hala-Salhab-Project1/details/:id" element={<Details loadingMessage={loadingMessage} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
