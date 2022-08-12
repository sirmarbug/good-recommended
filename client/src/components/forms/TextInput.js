import styled from "styled-components";
import {Field} from "formik";

const TextInput = styled(Field)`
  padding: .5rem .5rem;
  font-size: 1rem;
  background: #1e2835;
  color: #bac5d4;
  width: 100%;
  border: 0;
  -webkit-appearance: none;
  border-radius: .5rem;
  margin-bottom: 4px;
  &:focus {
    border: none;
    outline: none;
  }
`

export default TextInput