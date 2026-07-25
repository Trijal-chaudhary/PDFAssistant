import express from "express";
import { postPdfupload } from "../controllers/pdf.controller";
import uploadPDF from "../middlewares/multerStorage";

const postPdfuploadRouter = express.Router();

postPdfuploadRouter.post('/',uploadPDF.any(), postPdfupload);

export default postPdfuploadRouter;