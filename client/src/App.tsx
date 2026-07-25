
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UploadPDF from '../public/components/UploadPDF/UploadPDF.tsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<UploadPDF/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
