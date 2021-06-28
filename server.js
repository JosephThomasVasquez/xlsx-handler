import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();


const app = express();

app.use(express.json());

// Allow CORS origin
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log("Running Server On Port: ", PORT);
  });