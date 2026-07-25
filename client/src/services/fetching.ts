const backend = 'http://localhost:3002';
export const uploadPdf = async (data : FormData) =>{
  const response = await fetch(`${backend}/api/pdf_upload`, {
    method:"POST",
    body : data
  })
  return response.json();
}