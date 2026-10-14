import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("../frontend"));

const ai = new GoogleGenAI({
    apiKey: process.env.API
});

app.get("/joke", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Tell me one short, clean and funny joke."
        });
        res.json({
            type: "joke",
            content: response.text
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.get("/motivation", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Give me one clean ,short and inspiring motivational quote."
        });

        res.json({
            type: "motivation",
            content: response.text
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.get("/tip-of-the-day", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Give me one clean, useful practical tip for students.Use plain text only. Do not use Markdown, **, *, #, backticks, or unnecessary special characters." });

        res.json({
            type: "tip",
            content: response.text
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
});
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
