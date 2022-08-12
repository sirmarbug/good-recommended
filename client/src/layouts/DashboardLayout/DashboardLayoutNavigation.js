import {Component} from "react";
import {NavLink} from "react-router-dom";
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
                            <NavLink className="link" to="/dashboard">GoodRecommend</NavLink>
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
                            <NavLink className="link" to="/recommend/details/123">Szczegóły</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/recommend/123/edit">Edycja</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/recommend/new">Dodaj</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/login">Wyloguj</NavLink>
                        </li>
                    </ul>
                </Nav>
            </div>
        )
    }
}

export default DashboardLayoutNavigation