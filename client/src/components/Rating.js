import {Component} from "react";

class Rating extends Component {
    render() {
        const { rating } = this.props

        return (
            <span>
                {
                    rating === 1 && '★☆☆☆☆'
                }
                {
                    rating === 2 && '★★☆☆☆'
                }
                {
                    rating === 3 && '★★★☆☆'
                }
                {
                    rating === 4 && '★★★★☆'
                }
                {
                    rating === 5 && '★★★★★'
                }
            </span>
        )
    }
}

export default Rating