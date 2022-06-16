import { useState } from 'react'
import Button from './components/Button'
import ButtonClear from './components/ButtonClear'
import Screen from './components/Screen'
import './styles/App.css'
import {evaluate} from 'mathjs'

function App() {
const [input, setInput] = useState('')

const addInput = (value) => {
  setInput(input + value)
};

const calculateResult = () => {
  if (input) {
    setInput(evaluate(input))
  } else {
    alert('Add a value')
  }
};

  return (
    <div className='App'>
      <div className='container-calculator'>
        <Screen value={input}/>
        <div className='row'>
          <Button onclick={addInput}>1</Button>
          <Button onclick={addInput}>2</Button>
          <Button onclick={addInput}>3</Button>
          <Button onclick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button onclick={addInput}>4</Button>
          <Button onclick={addInput}>5</Button>
          <Button onclick={addInput}>6</Button>
          <Button onclick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button onclick={addInput}>7</Button>
          <Button onclick={addInput}>8</Button>
          <Button onclick={addInput}>9</Button>
          <Button onclick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button onclick={calculateResult}>=</Button>
          <Button onclick={addInput}>0</Button>
          <Button onclick={addInput}>.</Button>
          <Button onclick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear onclick={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
