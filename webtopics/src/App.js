import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home'
import Details from './Pages/Details'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
