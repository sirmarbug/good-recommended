import {Component} from "react";
import styled from "styled-components";
import Subtitle from "./typography/Subtitle";
import {convertTypeToString} from "../helpers/helpers";
import Rating from "./Rating";
import Button from "./buttons/Button";

const RecommendCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  background: #273444;
  color: #ebf0fc;
  padding: 2rem;
  width: 25%;
`

const RecommendCardActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`

class RecommendCard extends Component {
    render() {
        const { recommend, detailsRecommendHandle, editRecommendHandle, removeRecommendHandle } = this.props

        return (
            <RecommendCardWrapper>
                <Subtitle>{recommend.name}</Subtitle>
                <p>{convertTypeToString(recommend.type)}</p>
                <Rating rating={recommend.rating} />
                <RecommendCardActions>
                    <Button onClick={() => detailsRecommendHandle(recommend._id)}>Szczegóły</Button>
                    <Button onClick={() => editRecommendHandle(recommend._id)}>Edytuj</Button>
                    <Button onClick={() => removeRecommendHandle(recommend._id)}>Usuń</Button>
                </RecommendCardActions>
            </RecommendCardWrapper>
        );
    }
}

export default RecommendCard