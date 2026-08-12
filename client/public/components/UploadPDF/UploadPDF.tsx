import { useState } from "react";
import "./UploadPRD.css";
import { uploadPdf } from "../../../src/services/fetching";
import { useNavigate } from "react-router-dom";

const UploadPDF = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const navigate = useNavigate();
  function handleFileChange(e) {
    const file = e.target.files?.[0];
    // console.log(file);
    if (!file) return;
    setPdfFile(file);
  }

  async function handleUpload() {
    if (!pdfFile) {
      alert("the pdf is uploaded");
      return;
    }
    const formdata = new FormData();
    formdata.append("pdf", pdfFile);
    const response = await uploadPdf(formdata);
    console.log(pdfFile);
    console.log(response);
    navigate("/chat_with_pdf");
  }
  return (
    <div className="uploadPage8271">
      <div className="uploadCard8271">
        <h1>AI PDF Assistant</h1>

        <p>Select a PDF to build your knowledge base.</p>

        <input type="file" accept=".pdf" onChange={handleFileChange} />

        {/* Show selected file name */}
        {pdfFile && (
          <p className="fileName8271">Selected File: {pdfFile.name}</p>
        )}

        <button onClick={handleUpload}>Upload PDF</button>
      </div>
    </div>
  );
};

export default UploadPDF;
