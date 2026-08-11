
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UploadPDF from '../public/components/UploadPDF/UploadPDF.tsx'
import ChatWithPDF from '../public/components/ChatWithPDF/ChatWithPDF.tsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<UploadPDF/>}/>
      <Route path='/chat_with_pdf' element ={<ChatWithPDF/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
