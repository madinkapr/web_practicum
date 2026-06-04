import { GoogleGenAI } from "@google/genai"
import Fastify from "fastify"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

const fastify = Fastify({ logger: true })

fastify.post("/prompt", async (req, res) => {
	const { prompt } = req.body

	if (!prompt) {
		return res.status(400).send({ error: "Prompt is required" })
	}

	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: prompt,
	})

	const text=response.candidates[0].content.parts[0].text

	return { response: text }
})

fastify.listen({port:3000}, (err) => {
	if(err){
		fastify.log.error(err)
	}
	fastify.log.info(`Server is running on port 3000`)
})
