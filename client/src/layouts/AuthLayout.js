import {Component} from "react";
import styled from "styled-components";

const WrapperAuthLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: calc(100vh - 23px);
`

const WrapperAuthLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`

class AuthLayout extends Component {
    render() {
        return (
            <WrapperAuthLayout>
                <WrapperAuthLayoutContent>
                    {this.props.children}
                </WrapperAuthLayoutContent>
            </WrapperAuthLayout>
        )
    }
}

export default AuthLayout