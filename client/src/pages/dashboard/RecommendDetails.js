import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";

class RecommendDetails extends Component {
    goToHome = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        console.log(this.props)
        const { id } = this.props.match.params
        return (
            <DashboardLayout>
                <h1 onClick={this.goToHome}>RecommendDetails: {id}</h1>
            </DashboardLayout>
        )
    }
}

export default RecommendDetails