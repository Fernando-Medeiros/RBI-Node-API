import express from "express";

const PORT = parseInt(process.env.PORT) || 8080;

export const api = express();

api.use(express.json());

api.listen(PORT, () => console.log("Run Server"));
