import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SamplePage from './pages/SamplePage'

function App() {



  return (
    //Button関数の引数って考えよー。
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sample-page' element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;