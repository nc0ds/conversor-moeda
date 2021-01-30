import styled from 'styled-components'

const MainContainer = styled.div`
  width: 95%;
  max-width: 750px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 8px 8px 10px #00000044, -8px -8px 10px #FFF;
`

const ColBox = styled.div`
  width: 95%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: Helvetica;
  font-weight: 300;
`

const Paragraph = styled.p`
  font-family: Arial;
  margin: 1rem 0;
`

const Select = styled.select.attrs(props => ({
  defaultValue: 'Select a currency'
}))`
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  width: fit-content;
`

const TextInput = styled.input.attrs(props => ({
  type: 'text'
}))`
  border: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: #DDD;
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-family: Arial;
`

const Submit = styled.input.attrs(props => ({
  type: 'submit'
}))`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  height: 3rem;
  border: 1px solid #00000066;
  border-radius: 0.5rem;
  background-color: transparent;
  font-size: 1.1rem;
  font-family: Arial;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #00000044;
  }
`

export { MainContainer, ColBox, Title, Paragraph, Select, TextInput, Submit }
