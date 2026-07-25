import express from 'express';
import cors from 'cors';
import postPdfuploadRouter from './Routers/pdf.router';

const app = express();

app.use(express.json());
app.use(cors({
  origin :["http://localhost:5173"]
}))

app.use('/api/pdf_upload', postPdfuploadRouter);

const PORT = 3002;
app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})