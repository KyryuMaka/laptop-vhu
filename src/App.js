import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import Home from './client/Home';
import Authenticate from './admin/Authenticate';
import Admin from './admin/Admin';

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
