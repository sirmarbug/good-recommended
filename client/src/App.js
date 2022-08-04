import {Component} from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Movies from "./pages/dashboard/Movies";
import Series from "./pages/dashboard/Series";
import Books from "./pages/dashboard/Books";
import RecommendSave from "./pages/dashboard/RecommendSave";
import RecommendDetails from "./pages/dashboard/RecommendDetails";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <NavLink className="link" to="/login">Logowanie</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/register">Rejstracja</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink className="link" to="/movies">Filmy</NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <NavLink className="link" to="/series">Seriale</NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <NavLink className="link" to="/boooks">Książki</NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink className="link" to="/recommend/123">Szczegóły</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink className="link" to="/recommend/123/edit">Edycja</NavLink>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/series" component={Series}/>
                    <Route path="/books" component={Books}/>
                    <Route exact path="/recommend/:id" component={RecommendDetails}/>
                    <Route exact path="/recommend/:id/edit" component={RecommendSave}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
