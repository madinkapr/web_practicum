import "@css/main.css"
import { io } from "socket.io-client"

const messagesBox = document.querySelector(".messages")
const input = document.querySelector(".chat-input")
const sendBtn = document.querySelector(".send-btn")

let username = prompt("Ismingizni kiriting:")

while (!username || !username.trim()) {
    username = prompt("Iltimos, ismingizni kiriting:")
}

username = username.trim()

const server = io("http://localhost:3000")

function getAvatarText(name) {
    const parts = name.split(" ")

    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return name.slice(0, 1).toUpperCase()
}


function sendMessage() {
    const text = input.value.trim()
    if (!text) return

    server.emit("NEW_MESSAGE_FROM_BROWSER_BY_INPUT", {
        username,
        text,
    })

    input.value = ""
    input.focus()
}


function renderMessage(message) {
    const wrapper = document.createElement("div")
    const avatar = document.createElement("div")
    const content = document.createElement("div")
    const name = document.createElement("div")
    const bubble = document.createElement("div")

    const isMine = message.userId === server.id

    wrapper.classList.add("message")
    wrapper.classList.add(isMine ? "mine" : "other")

    avatar.classList.add("avatar")
    content.classList.add("message-content")
    name.classList.add("username")
    bubble.classList.add("bubble")

    avatar.textContent = getAvatarText(message.username)

    avatar.style.background = message.color || "#60a5fa"
    name.style.color = message.color || "#ffffff"

    name.textContent = message.username
    bubble.textContent = message.text

    content.appendChild(name)
    content.appendChild(bubble)

    wrapper.appendChild(avatar)
    wrapper.appendChild(content)

    messagesBox.appendChild(wrapper)
    messagesBox.scrollTo({
        top: messagesBox.scrollHeight,
        behavior: "smooth",
    })
}

server.on("PREV_MESSAGES", (messages) => {
    messagesBox.innerHTML = ""

    for (const m of messages) {
        renderMessage(m)
    }
})

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
})

sendBtn.addEventListener("click", sendMessage)

server.on("NEW_MESSAGE_FROM_SERVER", message => {
    renderMessage(message)
})
