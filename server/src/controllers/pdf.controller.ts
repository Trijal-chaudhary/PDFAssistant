import { Request, Response } from "express";
import { ai } from "../config/gemini";
export const postPdfupload = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const url = files[0].path;
    console.log(url);
    const response = await fetch("http://localhost:8000/pdf_uploaded", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    res.status(200).json({ Message: "hello" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const postMessage = async (req: Request, res: Response) => {
  console.log(req.body.mess);
  try {
    const response = await fetch("http://localhost:8000/pdf/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    console.log(data.data.documents);
    const prompt = `
  You are an AI PDF assistant.

  Answer the user's question using only the provided PDF context.

  PDF Context:
  ${data.data.documents.join("\n\n")}

  User Question:
  ${req.body.mess}

  Instructions:
  - Give a clear and concise answer.
  - Use Markdown formatting.
  - Use headings when appropriate.
  - Use bullet points for multiple items.
  - Use numbered lists for steps.
  - Use **bold** for important terms.
  - Use code blocks when explaining code.
  - Do not mention that you are using context.
  - Do not make up information that isn't present in the PDF.
  `;
    // const prompt = req.body.mess + data.data.documents;
    const resp = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log(resp.text);
    res.status(200).json({ data: resp.text });
  } catch (error) {
    console.log(error);
    res.status(200).json({ mess: error });
  }
  // res.status(200).json({ mess: "everything is ok" });
};
