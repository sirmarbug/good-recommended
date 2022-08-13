import {Component} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #273444;
  color: #ebf0fc;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const NavContentLeft = styled.ul`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0 5rem;
`

const NavContentRight = styled.ul`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 5rem;
`

class DashboardLayoutNavigation extends Component{
    render() {
        return (
            <div>
                <Nav>
                    <NavContentLeft>
                            <li>
                                <NavLink className="link" to="/dashboard"><strong>GoodRecommend</strong></NavLink>
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
                    </NavContentLeft>
                    <NavContentRight>
                            <li>
                                <NavLink className="link" to="/recommend/new">Dodaj</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/login">Wyloguj</NavLink>
                            </li>
                    </NavContentRight>
                </Nav>
            </div>
        )
    }
}

export default DashboardLayoutNavigation