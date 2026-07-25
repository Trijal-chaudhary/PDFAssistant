from fastapi import FastAPI
from pydantic import BaseModel
import chromadb
import fitz

client = chromadb.PersistentClient(path="./chromadb")
try:
  client.delete_collection("example")
except:
  pass

collection = client.get_or_create_collection("example")

app = FastAPI()

class PdfUrl(BaseModel):
  url : str


def chunking(text, size, overlaps):
  chunk = []
  start = 0
  while(start < len(text)):
    end = start + size
    ch = text[start:end]
    chunk.append(ch)
    start = end - overlaps
  return chunk
  

@app.post('/pdf_uploaded')
def PdfUpload(data : PdfUrl):
  path = "D:/AIEngineering/PDFAssistant/server/" + data.url
  print(path)
  pdf = fitz.open(path)
  text = ""
  for page in pdf:
    text += page.get_text()
  # print(text)
  chunkOut = chunking(text, 500, 100)
  ids = []
  metadata = []
  for i in range(0, len(chunkOut)):
    ids.append("text" + str(i))
    metadata.append({
      "file_name" : "example",
      "chunk_number" : i
    })
  collection.add(
    ids=ids,
    documents=chunkOut,
    metadatas=metadata
  )
  # data = collection.get()
  # print(data)
  # for ch in chunkOut:
  #   print(ch)
  #   print('......')
  return {
    "message" :"stored"
  }