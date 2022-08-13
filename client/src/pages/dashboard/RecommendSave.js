import {Component} from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import {Formik} from "formik";
import MyForm from "../../components/forms/MyForm";
import Label from "../../components/typography/Label";
import TextInput from "../../components/forms/TextInput";
import MyErrorMessage from "../../components/forms/MyErrorMessage";
import InputGroup from "../../components/forms/InputGroup";
import Button from "../../components/buttons/Button";
import styled from "styled-components";
import Subtitle from "../../components/typography/Subtitle";
import TextareaInput from "../../components/forms/TextareaInput";
import SelectInput from "../../components/forms/SelectInput";
import {create, getById, updateRecommend} from "../../api/recommend";
import {recommendValidationSchema} from "../../helpers/validations";

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

class RecommendSave extends Component {
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

    submitHandle = async (values) => {
        const { id } = this.props.match.params

        try {
            if (id) {
                await updateRecommend(id, values)
                this.props.history.push('/dashboard')
            } else {
                await create(values)
                this.props.history.push('/dashboard')
            }
        } catch (e) {
            console.error(e)
        }
    }


    render() {
        const { id } = this.props.match.params

        return (
            <DashboardLayout>
                <RecommendSaveWrapper>
                    <RecommendSaveWrapperContent>
                        <Subtitle>{ id ? 'Edytuj' : 'Dodaj' } rekomendację</Subtitle>
                        <Formik
                            initialValues={this.state.form}
                            enableReinitialize
                            validationSchema={recommendValidationSchema}
                            onSubmit={this.submitHandle}
                        >
                            {({ isSubmitting }) => (
                                <MyForm>
                                    <InputGroup>
                                        <Label>Typ</Label>
                                        <SelectInput name="type">
                                            <option value="1">Film</option>
                                            <option value="2">Serial</option>
                                            <option value="3">Książka</option>
                                        </SelectInput>
                                        <MyErrorMessage name="type" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Nazwa</Label>
                                        <TextInput type="text" name="name" />
                                        <MyErrorMessage name="name" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Opis</Label>
                                        <TextareaInput name="description" />
                                        <MyErrorMessage name="description" component="div" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Label>Ocena</Label>
                                        <SelectInput name="rating">
                                            <option value={1}>★☆☆☆☆</option>
                                            <option value={2}>★★☆☆☆</option>
                                            <option value={3}>★★★☆☆</option>
                                            <option value={4}>★★★★☆</option>
                                            <option value={5}>★★★★★</option>
                                        </SelectInput>
                                        <MyErrorMessage name="rating" component="div" />
                                    </InputGroup>
                                    <Button type="submit" disabled={isSubmitting}>{id ? 'Edytuj' : 'Dodaj'}</Button>
                                </MyForm>
                            )}
                        </Formik>
                    </RecommendSaveWrapperContent>
                </RecommendSaveWrapper>
            </DashboardLayout>
        )
    }
}

export default RecommendSave