import { Switch, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Auth from './views/Auth';
import { getUser, logout } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <header>
        <NavLink to="/auth">Login Page</NavLink>
      </header>
      <Switch>
        <Route exact path="/">
          {currentUser && (
            <>
              <h1>Logged In</h1>
              <button onClick={logOutUser}>Log Out</button>
            </>
          )}
          {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
