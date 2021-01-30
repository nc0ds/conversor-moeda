import { useState, useEffect, useRef } from 'react'
import './App.css';
import { MainContainer, ColBox, Title, Paragraph, Select, TextInput, Submit } from './components/styled'

function App() {
  const [currencies, setCurrencies] = useState({ results: "" })
  const [result, setResult] = useState(0)

  const currency1 = useRef(null)
  const currency2 = useRef(null)
  const toBeConverted = useRef(null)

  const getCurrencies = () => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=57f79440867366ae7aa3')
      .then(res => res.json())
      .then(res => { setCurrencies(res) })
      .catch(err => { alert('Invalid values') })
  }

  const convert = (str, value) => {
    const formatVal = value.replace(',', '.')
    const convVal = Number(formatVal)
    fetch(`https://free.currconv.com/api/v7/convert?apiKey=57f79440867366ae7aa3&q=${str}&compact=y`)
      .then(res => res.json())
      .then(res => setResult((convVal * res[str].val).toFixed(2)))
      .catch(err => { alert('Invalid value') })
  }

  useEffect(() => {
    getCurrencies()
  }, [])

  return (
    <MainContainer>
      <Title>Currency Converter</Title>
      <form onSubmit={e => {
        e.preventDefault()

        if(toBeConverted.current.value === '') {
          alert('Insert a valid value')
        } else {
          const string = `${currency1.current.value}_${currency2.current.value}`
  
          convert(string, toBeConverted.current.value)
        }
      }}>
        <ColBox>
          <Paragraph><strong>From:</strong></Paragraph>
          <Select ref={currency1}>
            <option disabled>Select a currency</option>
            {
              Object.getOwnPropertyNames(currencies.results).map(item => <option key={item} value={item}>{item}</option>)
            }
          </Select>
          <TextInput placeholder='Value' ref={toBeConverted}></TextInput>
        </ColBox>
        <ColBox>
          <Paragraph><strong>To:</strong></Paragraph>
          <Select ref={currency2}>
            <option disabled>Select a currency</option>
            {
              Object.getOwnPropertyNames(currencies.results).map(item => <option key={item} value={item}>{item}</option>)
            }
          </Select>
        </ColBox>
        <ColBox>
          <Paragraph><strong>Result: </strong> {result}</Paragraph>
        </ColBox>
        <Submit value='Convert' />
      </form>
    </MainContainer>
  );
}

export default App;
