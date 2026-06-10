import { GoogleGenAI } from "@google/genai"
import Fastify from "fastify"
import cors from "@fastify/cors"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

const fastify = Fastify({ logger: true })
fastify.register(cors, { origin: true })

fastify.post("/prompt", async (req, res) => {
	const { prompt } = req.body

	if (!prompt) {
		return res.status(400).send({ error: "Prompt is required" })
	}

	try {
		const stream = await ai.models.generateContentStream({
			model: "gemini-2.5-flash",
			contents: prompt,
		})

		res.raw.setHeader("Content-Type", "text/plain")
		res.raw.setHeader("Transfer-Encoding", "chunked")

		for await (const chunk of stream) {
			const text = chunk.candidates[0].content.parts[0].text
			res.raw.write(text)
		}

		res.raw.end()
	} catch (err) {
		fastify.log.error(err)
		return res.status(500).send({ error: "AI service error: " + err.message })
	}
})

fastify.listen({ port: 3000 }, (err) => {
	if (err) {
		fastify.log.error(err)
	}
	fastify.log.info(`Server is running on port 3000`)
})
