import {Component} from "react";
import styled from "styled-components";

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 8px;
  background: #273444;
  color: #ebf0fc;
`

class DashboardLayoutFooter extends Component{
    render() {
        return (
            <FooterText>Buziaczki dla Madzi 😘😘😘</FooterText>
        )
    }
}

export default DashboardLayoutFooter