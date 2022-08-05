import {Component} from "react";
import {NavLink} from "react-router-dom";
import TextButton from "../../components/buttons/TextButton";
import styled from "styled-components";

const Nav = styled.nav`
  background: #273444;
  color: #ebf0fc;
  padding: 1rem 0;
`

class DashboardLayoutNavigation extends Component{
    render() {
        return (
            <div>
                <Nav>
                    <ul>
                        <li>
                            <NavLink className="link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/movies">Filmy</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/series">Seriale</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/books">Książki</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/recommend/123">Szczegóły</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/recommend/123/edit">Edycja</NavLink>
                        </li>
                        <li>
                            <TextButton to="/login">Wyloguj</TextButton>
                        </li>
                    </ul>
                </Nav>
            </div>
        )
    }
}

export default DashboardLayoutNavigation