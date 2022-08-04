import {Component} from "react";

class RecommendDetails extends Component {
    goToHome = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        console.log(this.props)
        const { id } = this.props.match.params
        return (
            <div className="dashboard" onClick={this.goToHome}>
                <h1>RecommendDetails: {id}</h1>
            </div>
        )
    }
}

export default RecommendDetails