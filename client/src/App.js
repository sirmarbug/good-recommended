import {Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
