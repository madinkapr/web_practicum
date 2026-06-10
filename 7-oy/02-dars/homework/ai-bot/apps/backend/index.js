import { GoogleGenAI } from "@google/genai"
import http from "http"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

const server = http.createServer(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")

	if (req.method === "OPTIONS") {
		res.writeHead(204)
		res.end()
		return
	}

	if (req.method === "POST" && req.url === "/prompt") {
		let body = ""
		req.on("data", chunk => body += chunk)
		req.on("end", async () => {
			const { prompt } = JSON.parse(body)

			if (!prompt) {
				res.writeHead(400, { "Content-Type": "application/json" })
				res.end(JSON.stringify({ error: "Prompt is required" }))
				return
			}

			try {
				const stream = await ai.models.generateContentStream({
					model: "gemini-2.5-flash",
					contents: prompt,
				})

				res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })

				for await (const chunk of stream) {
					const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text
					if (text) res.write(text)
				}

				res.end()
			} catch (err) {
				console.error(err)
				res.writeHead(500, { "Content-Type": "application/json" })
				res.end(JSON.stringify({ error: err.message }))
			}
		})
		return
	}

	res.writeHead(404)
	res.end()
})

server.listen(3000, () => {
	console.log("Server is running on port 3000")
})
