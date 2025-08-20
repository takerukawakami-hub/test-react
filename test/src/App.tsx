import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button.tsx'


function App() {

  const [count, setCount] = useState(0);
  const handleClick =()=>{
        setCount(count + 1);
    }

  return (
    //Button関数の引数って考えよー。
    <>
      <h1>Hello World</h1>
      <Button  type ={'submit'} disabled={false} onClick={handleClick}>
        カウント:{count}
        

      </Button>
    </>
  )
};

export default App

