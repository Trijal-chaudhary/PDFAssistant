import express from "express";
import { postMessage, postPdfupload } from "../controllers/pdf.controller";
import uploadPDF from "../middlewares/multerStorage";

const postPdfuploadRouter = express.Router();
const postMessageRouter = express.Router();

postPdfuploadRouter.post('/',uploadPDF.any(), postPdfupload);
postMessageRouter.post('/', postMessage);

export {postPdfuploadRouter,postMessageRouter}