import express from "express";
import cors from "cors";
import path from "path";
import session from 'express-session';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));