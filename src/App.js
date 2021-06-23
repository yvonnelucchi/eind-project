import React, {useState} from "react";
import './App.css';
import './App.css';
import './pages/SignUp.css';
// import posts from './data/posts.json';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import  { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import SignUp from './pages/SignUp';

function  PrivateRoute({ children, isAuth, ...rest}) {

    return(
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login"/>}
        </Route>
    )
}


function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);


    return (
        <Router>
            <TopMenu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/sign-up">
                    <SignUp toggleAuth={toggleIsAuthenticated}/>
                </Route>

                <Route path="/login">
                    <LoginPage toggleAuth={toggleIsAuthenticated} />
                </Route>

                <PrivateRoute exact path="/profile" isAuth={isAuthenticated}>
                    <ProfilePage/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;

