import {Component} from "react";
import styled from "styled-components";
import Title from "../components/typography/Title";

const WrapperAuthLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
`

const WrapperAuthLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  border-radius: .5rem;
  background: #273444;
  color: #ebf0fc;
  padding: 2rem;
  margin: 2rem 0;
`

class AuthLayout extends Component {
    render() {
        const { children } = this.props
        return (
            <WrapperAuthLayout>
                <WrapperAuthLayoutContent>
                    <Title>Good Recommend</Title>
                    {children}
                </WrapperAuthLayoutContent>
            </WrapperAuthLayout>
        )
    }
}

export default AuthLayout