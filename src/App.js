import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
