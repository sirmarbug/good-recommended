import {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Movies from "./pages/dashboard/Movies";
import Series from "./pages/dashboard/Series";
import Books from "./pages/dashboard/Books";
import RecommendSave from "./pages/dashboard/RecommendSave";
import RecommendDetails from "./pages/dashboard/RecommendDetails";

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/dashboard"}/>
            )
        }
    />
)

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/login"}/>
            )
        }
    />
)

const IndexRoute = ({ ...rest }) => (
    <Route
        {...rest}
        render={() =>
            localStorage.getItem('token') ? (
                <Redirect to={"/dashboard"}/>
            ) : (
                <Redirect to={"/login"}/>
            )
        }
    />
)

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <IndexRoute exact path="/"/>
                    <GuestRoute path="/login" component={Login}/>
                    <GuestRoute path="/register" component={Register}/>
                    <AuthRoute path="/dashboard" component={Dashboard}/>
                    <AuthRoute path="/movies" component={Movies}/>
                    <AuthRoute path="/series" component={Series}/>
                    <AuthRoute path="/books" component={Books}/>
                    <AuthRoute exact path="/recommend/details/:id" component={RecommendDetails}/>
                    <AuthRoute exact path="/recommend/new" component={RecommendSave}/>
                    <AuthRoute exact path="/recommend/:id/edit" component={RecommendSave}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
