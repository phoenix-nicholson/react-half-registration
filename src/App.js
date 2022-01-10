import { Switch, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/signin">Sign In</NavLink>

        <NavLink to="/signup">Sign Up</NavLink>
      </header>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
