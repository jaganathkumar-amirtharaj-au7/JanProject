
import Navigation from './navigation';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

const Router=()=>{
    return(
        <div>
            <BrowserRouter>
              <Navigation />
              <div className="content">
            <Switch>
              <Route path="/signup" component={Signup} ></Route>
              <Route path="/login" component={Login} ></Route>
              </Switch>
              </div>
              </BrowserRouter>
        </div>
    )
}
export default Router;