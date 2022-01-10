import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SignUp from './views/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
