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

class DashboardLayout extends Component {
    render() {
        const { children } = this.props

        return (
            <WrapperDashboardLayout>
                <DashboardLayoutNavigation/>
                {children}
                <DashboardLayoutFooter/>
            </WrapperDashboardLayout>
        )
    }
}

export default DashboardLayout