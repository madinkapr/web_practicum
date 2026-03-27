import { createServer } from "node:http"
import { Server } from "socket.io"

const PORT = 3000

const httpServer = createServer((_req, res) => {

	res.writeHead(200, { "Content-Type": "text/plain" })
	res.end("Socket server is running")
})

const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	}
})

const browsers = []
const messages = []
const userColors = new Map()

const colors = [
	"#60a5fa",
	"#34d399",
	"#f87171",
	"#fbbf24",
	"#a78bfa",
	"#22d3ee",
	"#fb7185",
	"#f472b6",
	"#38bdf8",
	"#4ade80",
]

let colorIndex = 0

function getNextColor() {
  const color = colors[colorIndex % colors.length]
  colorIndex++
  return color
}

io.on("connection", browser => {

	browsers.push(browser)

	userColors.set(browser.id, getNextColor())

	browser.emit("PREV_MESSAGES", messages)

	browser.on("NEW_MESSAGE_FROM_BROWSER_BY_INPUT", message => {

		if (!message?.username || !message?.text) return

		const fullMessage = {
			username: message.username,
			text: message.text,
			userId: browser.id,
			color: userColors.get(browser.id),
		}

		messages.push(fullMessage)

		for (const b of browsers) {

			b.emit("NEW_MESSAGE_FROM_SERVER", fullMessage)
		}
	})

	browser.on("disconnect", () => {
		const index = browsers.indexOf(browser)
		if (index !== -1) {
			browsers.splice(index, 1)
		}
		userColors.delete(browser.id)
	})
})

httpServer.listen(PORT, "0.0.0.0", () => {

	console.log(`Server listening on port ${PORT}`)
})
