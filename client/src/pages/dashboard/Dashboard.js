import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {allRecommend} from "../../api/recommend";

class Dashboard extends Component {
    state = {
        recommends: null
    }

    componentDidMount = async () => {
        const { data } = await allRecommend()
        console.log('data', data)
        this.setState({recommends: data})
    }

    render() {
        return (
            <DashboardLayout>
                <h1>Wszystkie rekomendacje</h1>
                {this.state.recommends && this.state.recommends.total > 0 && this.state.recommends.items.map(recommend => (
                    <p key={recommend._id}>{recommend._id} | {recommend.type} | {recommend.name} | {recommend.description} | {recommend.rating}</p>
                ))}
            </DashboardLayout>
        )
    }
}

export default Dashboard