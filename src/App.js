import './App.css';
import { MainContainer, ColBox, Title, Paragraph, Select, TextInput, Submit } from './components/styled'

function App() {
  return (
    <MainContainer>
      <Title>Currency Converter</Title>
      <form>
        <ColBox>
          <Paragraph>From:</Paragraph>
          <Select>
            <option disabled>Select a currency</option>
          </Select>
          <TextInput placeholder='Value'></TextInput>
        </ColBox>
        <ColBox>
          <Paragraph>To:</Paragraph>
          <Select>
            <option disabled>Select a currency</option>
          </Select>
          <TextInput placeholder='Value'></TextInput>
        </ColBox>
        <Submit value='Convert' />
      </form>
    </MainContainer>
  );
}

export default App;
