import { Request, Response } from "express";
import{ ai }from "../config/gemini"
export const postPdfupload = async (req :Request , res :Response)=>{
  try {
    const files = req.files as Express.Multer.File[];
    const url = files[0].path;
    console.log(url);
    const response = await fetch('http://localhost:8000/pdf_uploaded', {
      method :"POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({url})
    })
    res.status(200).json({Message :"hello"});
  } catch (error) {
    res.status(500).json({message : error});
  }
}
export const postMessage = async (req :Request, res : Response)=>{
  console.log(req.body.mess);
  try {
    const response = await fetch('http://localhost:8000/pdf/chat',  {
      method :"POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(req.body)
    })
    const data = await response.json();
    console.log(data.data.documents);
    const prompt = req.body.mess + data.data.documents;
    const resp = await ai.models.generateContent({
      model : "gemini-2.5-flash",
      contents : prompt
    })
    console.log(resp.text);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({mess :"everything is ok"});
}