import {Component} from "react";
import {NavLink} from "react-router-dom";
import TextButton from "../../components/buttons/TextButton";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
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

                <h1>Widok po zalogowaniu</h1>
                <h1>Buziaczki dla Madzi 😘😘😘</h1>
                <TextButton to="/login">Wyloguj</TextButton>
            </div>
        )
    }
}

export default Dashboard