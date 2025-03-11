import express from "express";
import cors from "cors";
import router from "./routes/router";
import errorMiddleware from "./middlewares/errorHandleMiddleware";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {      
   res.status(200).send('Wellcome to my project API')
})

app.use("/v1", router);

app.use(errorMiddleware);

export default app;
