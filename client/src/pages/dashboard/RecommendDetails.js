import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {getById} from "../../api/recommend";
import Subtitle from "../../components/typography/Subtitle";
import {Formik} from "formik";
import {recommendValidationSchema} from "../../helpers/validations";
import MyForm from "../../components/forms/MyForm";
import InputGroup from "../../components/forms/InputGroup";
import Label from "../../components/typography/Label";
import SelectInput from "../../components/forms/SelectInput";
import MyErrorMessage from "../../components/forms/MyErrorMessage";
import TextInput from "../../components/forms/TextInput";
import TextareaInput from "../../components/forms/TextareaInput";
import styled from "styled-components";

const RecommendSaveWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RecommendSaveWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border-radius: .5rem;
  background: #273444;
  color: #ebf0fc;
  padding: 2rem;
  margin: 2rem 0;
`

class RecommendDetails extends Component {
    state = {
        form: {
            type: "1",
            name: '',
            description: '',
            rating: "5"
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params

        if (!id) {
            return
        }

        const { data } = await getById(id)
        this.setState({ form: data })
    }

    render() {
        return (
            <DashboardLayout>
                <RecommendSaveWrapper>
                    <RecommendSaveWrapperContent>
                        <Subtitle>Szczegóły rekomendacji</Subtitle>
                        <Formik
                            initialValues={this.state.form}
                            enableReinitialize
                            validationSchema={recommendValidationSchema}
                        >
                            {() => (
                                <MyForm>
                                    <InputGroup>
                                        <Label>Typ</Label>
                                        <SelectInput name="type" disabled>
                                            <option value="1">Film</option>
                                            <option value="2">Serial</option>
                                            <option value="3">Książka</option>
                                        </SelectInput>
                                        <MyErrorMessage name="type" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Nazwa</Label>
                                        <TextInput type="text" name="name" disabled />
                                        <MyErrorMessage name="name" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Opis</Label>
                                        <TextareaInput name="description" disabled />
                                        <MyErrorMessage name="description" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Ocena</Label>
                                        <SelectInput name="rating" disabled>
                                            <option value={1}>★☆☆☆☆</option>
                                            <option value={2}>★★☆☆☆</option>
                                            <option value={3}>★★★☆☆</option>
                                            <option value={4}>★★★★☆</option>
                                            <option value={5}>★★★★★</option>
                                        </SelectInput>
                                        <MyErrorMessage name="rating" component="div" />
                                    </InputGroup>
                                </MyForm>
                            )}
                        </Formik>
                    </RecommendSaveWrapperContent>
                </RecommendSaveWrapper>
            </DashboardLayout>
        )
    }
}

export default RecommendDetails