import { Request, Response } from "express";

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