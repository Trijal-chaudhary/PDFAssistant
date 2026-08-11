import React, { useState } from 'react'
import './ChatWithPDF.css'
import { sendMessage } from '../../../src/services/fetching';
interface Message{
  sender : "ai" | "user",
  text : string
}
const ChatWithPDF = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello 👋 Ask me anything about your uploaded PDF."
    }
  ])

  async function handleSend() {

    if (!question.trim()) return;
    const res = await sendMessage(question);
    console.log(res);
    // Add user's question.

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question
      }
    ]);

    // Backend call will come here later.
    // AI response will be appended after receiving it.

    setQuestion("");
  }
  return (
    <div className="chatPage4728">

      <div className="header4728">

        <div>

          <h2>AI PDF Assistant</h2>

          <p>📄 Express.js.pdf</p>

        </div>

        <button>
          Upload New PDF
        </button>

      </div>

      <div className="chatContainer4728">

        {
          messages.map((message, index) => (

            <div
              key={index}
              className={
                message.sender === "user"
                  ? "message4728 user4728"
                  : "message4728 ai4728"
              }
            >

              {message.text}

            </div>

          ))
        }

      </div>

      <div className="inputArea4728">

        <input
          type="text"
          placeholder="Ask anything about your PDF..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>

  )
}

export default ChatWithPDF
