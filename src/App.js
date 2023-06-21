import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home'
import Details from './Pages/details'
import Header from '../src/Componants/Header/header' 
import Banner from '../src/Componants/Banner/Banner'
import Footer from '../src/Componants/Footer/Footer'
import useApiRequest from './API/useApiRequest'
import { useState } from 'react';



function App() {
  const {data, loading, error} = useApiRequest('https://tap-web-1.herokuapp.com/topics/list')
  const loadingMessage = useState('Loading...')

  return (
    <div>
    <Header/>
    <Banner/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Hala-Salhab-Project1" render={(props) => <Home data={data} loading={loading} error={error} loadingMessage={loadingMessage}/>} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;
