import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {getByType, removeRecommend} from "../../api/recommend";
import RecommendCard from '../../components/RecommendCard'
import styled from "styled-components";

const BooksWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 2rem 2rem 0;
  width: 100%;
`

class Books extends Component {
    state = {
        recommends: null
    }

    componentDidMount = async () => {
        await this.fetchAllRecommend()
    }

    fetchAllRecommend = async () => {
        const { data } = await getByType(3)
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
                <h1>Książki</h1>
                <BooksWrapper>
                    {this.state.recommends && this.state.recommends.total > 0 && this.state.recommends.items.map(recommend => (
                        <RecommendCard
                            key={recommend._id}
                            recommend={recommend}
                            detailsRecommendHandle={this.detailsRecommendHandle}
                            editRecommendHandle={this.editRecommendHandle}
                            removeRecommendHandle={this.removeRecommendHandle}
                        />
                    ))}
                </BooksWrapper>
            </DashboardLayout>
        )
    }
}

export default Books