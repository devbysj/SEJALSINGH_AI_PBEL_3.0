import express from "express";
import multer from "multer";
import { createRequire } from "module";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables immediately before the AI Engine initializes
dotenv.config();

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only native PDF formatting payloads accepted currently."), false);
    }
  }
});

// Initialize the client explicitly ensuring it reads the loaded environment string
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Missing required file payload." });
    }

    console.log(`📦 Ingesting real binary payload: [${req.file.originalname}]`);
    
    // 1. Parse text layers out of the buffered file
    const parsedData = await pdfParse(req.file.buffer);
    const cleanExtractedText = parsedData.text.replace(/\s+/g, " ").trim();

    if (cleanExtractedText.length < 50) {
      return res.status(422).json({ error: "Insufficient extractable text layers inside PDF." });
    }

    const targetJobTitle = req.body.jobTitle || "Software Engineer";
    console.log(`🤖 Deploying Gemini core analysis for target track: ${targetJobTitle}`);

 // 2. Formulate the system prompt mapping the exact output schema
    const prompt = `
      You are an elite corporate Technical Recruiter and Applicant Tracking System (ATS) optimization algorithm.
      Analyze the following raw resume text content against the target job role: "${targetJobTitle}".
      
      Evaluate the structural integrity, keyword densities, missing skills, and overall grammar profile.
      You must respond ONLY with a single valid JSON object. Do not include markdown code block formatting like \`\`\`json.
      
      The JSON object must follow this exact schema:
      {
        "atsScore": number (between 0 and 100 representing job alignment),
        "resumeScore": number (between 0 and 100 representing layout formatting quality),
        "grammarScore": number (between 0 and 100 representing linguistic accuracy),
        "keywordScore": number (between 0 and 100 representing target word matching),
        "skills": [
          {
            "name": "string (name of skill, e.g., PYTHON)",
            "weight": number (between 30 and 100 representing the presence/strength of this skill in the resume)"
          }
        ],
        "gaps": ["array", "of", "3", "critical", "missing", "skills", "or", "technologies", "needed", "for", "the", "target", "job"]
      }

      Raw Resume Text:
      ${cleanExtractedText}
    `;

    // 3. Query the model using the modern SDK framework
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    const responseText = response.text.trim();

    // 4. Parse the returned AI raw string into an operational JSON payload matrix
    let parsedAiReport;
    try {
      const cleanJsonString = responseText.replace(/```json|```/g, "").trim();
      parsedAiReport = JSON.parse(cleanJsonString);
    } catch (parseError) {
      console.error("❌ Failed to natively map Gemini response text straight to JSON:", responseText);
      return res.status(500).json({ error: "AI engine generated an irregular configuration object." });
    }

    // 5. Return the actual analytical insights directly to the frontend app
    return res.status(200).json({
      message: "Live Gemini AI Analysis Success.",
      report: {
        filename: req.file.originalname,
        targetRole: targetJobTitle,
        timestamp: new Date().toISOString(),
        ...parsedAiReport
      }
    });

  } catch (error) {
    console.error("❌ Backend Core Engine Failure:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error during AI scanning." });
  }
});

export default router;