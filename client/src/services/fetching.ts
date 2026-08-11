const backend = 'http://localhost:3002';
export const uploadPdf = async (data : FormData) =>{
  const response = await fetch(`${backend}/api/pdf_upload`, {
    method:"POST",
    body : data
  })
  return response.json();
}
export const sendMessage = async (data : any) =>{
  const response = await fetch(`${backend}/api/ask_pdf`, {
    method:"POST",
    body : data
  })
  return response.json();
}