import {Component} from "react";
import styled from "styled-components";
import DashboardLayoutNavigation from "./DashboardLayoutNavigation";
import DashboardLayoutFooter from "./DashboardLayoutFooter";

const WrapperDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
`

const WrapperDashboardLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const WrapperDashboardLayoutContent = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`

class DashboardLayout extends Component {
    render() {
        const { children } = this.props

        return (
            <WrapperDashboardLayout>
                <DashboardLayoutNavigation/>
                <WrapperDashboardLayoutContainer>
                    <WrapperDashboardLayoutContent>
                        {children}
                    </WrapperDashboardLayoutContent>
                </WrapperDashboardLayoutContainer>
                <DashboardLayoutFooter/>
            </WrapperDashboardLayout>
        )
    }
}

export default DashboardLayout