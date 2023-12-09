import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Authenticate from './pages/Authenticate';
import Admin from './pages/Admin';

function App() {
  var isAuthenticated = sessionStorage.getItem("isAuthenticated")
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {!isAuthenticated?
          <Route exact path="/admin" component={Authenticate} />:
          <>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/:route" component={Admin} />
          </>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
