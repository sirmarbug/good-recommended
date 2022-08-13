import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {allRecommend, removeRecommend} from "../../api/recommend";
import RecommendCard from '../../components/RecommendCard'
import styled from "styled-components";

const DashoardWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 2rem 2rem 0;
  width: 100%;
`

class Dashboard extends Component {
    state = {
        recommends: null
    }

    componentDidMount = async () => {
        await this.fetchAllRecommend()
    }

    fetchAllRecommend = async () => {
        const { data } = await allRecommend()
        this.setState({recommends: data})
    }

    detailsRecommendHandle = id => {
        this.props.history.push(`/recommend/details/${id}`)
    }

    editRecommendHandle = id => {
        this.props.history.push(`/recommend/${id}/edit`)
    }

    removeRecommendHandle = async id => {
        await removeRecommend(id)
        await this.fetchAllRecommend()
    }

    render() {
        return (
            <DashboardLayout>
                <h1>Wszystkie rekomendacje</h1>
                <DashoardWrapper>
                    {this.state.recommends && this.state.recommends.total > 0 && this.state.recommends.items.map(recommend => (
                        <RecommendCard
                            key={recommend._id}
                            recommend={recommend}
                            detailsRecommendHandle={this.detailsRecommendHandle}
                            editRecommendHandle={this.editRecommendHandle}
                            removeRecommendHandle={this.removeRecommendHandle}
                        />
                    ))}
                </DashoardWrapper>
            </DashboardLayout>
        )
    }
}

export default Dashboard