import { useState } from "react"
import { marked } from "marked"
import "./App.css"

function App() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (!prompt.trim()) return

        const userMessage = prompt
        setMessages(prev => [...prev, { role: "user", text: userMessage }])
        setPrompt("")
        setLoading(true)

        try {
            const res = await fetch("http://localhost:3000/prompt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: userMessage }),
            })

            if (!res.ok) {
                setMessages(prev => [...prev, { role: "ai", text: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring." }])
                setLoading(false)
                return
            }

            setMessages(prev => [...prev, { role: "ai", text: "" }])
            setLoading(false)

            const reader = res.body.getReader()
            const decoder = new TextDecoder()

            while (true) {
                const { done, value } = await reader.read()
                if (done) break
                const chunk = decoder.decode(value)
                setMessages(prev => {
                    const updated = [...prev]
                    updated[updated.length - 1] = {
                        role: "ai",
                        text: updated[updated.length - 1].text + chunk,
                    }
                    return updated
                })
            }
        } catch (err) {
            setMessages(prev => [...prev, { role: "ai", text: "Server bilan bog'lanishda xatolik." }])
            setLoading(false)
        }
    }

    return (
        <div className="app">
            <header className="header">
                <div className="logo">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="#4285f4"/>
                        <path d="M14 6L22 14L14 22L6 14L14 6Z" fill="#8ab4f8"/>
                    </svg>
                    <span>Gemini</span>
                </div>
            </header>

            <div className="messages">
                {messages.length === 0 && (
                    <div className="welcome">
                        <svg width="48" height="48" viewBox="0 0 28 28" fill="none">
                            <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="#4285f4"/>
                            <path d="M14 6L22 14L14 22L6 14L14 6Z" fill="#8ab4f8"/>
                        </svg>
                        <h2>Salom! Sizga qanday yordam bera olaman?</h2>
                    </div>
                )}
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                        <div className="bubble">
                            {msg.role === "ai"
                                ? <div dangerouslySetInnerHTML={{ __html: marked(msg.text) }} />
                                : <p>{msg.text}</p>
                            }
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="message ai">
                        <div className="bubble loading">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
            </div>

            <div className="input-area">
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Gemini ga yozing..."
                    />
                    <button type="submit" disabled={!prompt.trim() || loading}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App
