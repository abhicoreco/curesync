import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import ChatMessage from "./ChatMessage";

export default function AiChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. Ask me anything about vaccine trials, immunization records, or our platform!",
      isUser: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "Thank you for your question! I'm here to help with information about vaccine trials and our platform. Is there anything specific you'd like to know?",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full flex flex-col justify-end min-h-[363px] h-[400px]">
      <div className="flex items-center gap-3 justify-center mb-4">
        {/* <div className="bg-[#0056b3] text-white rounded-full p-2 mr-2">
          <Send className="h-6 w-6" />

        </div> */}
        <img src="/chat.png" alt="chat" />
        <h2 className="text-xl font-bold text-[#0a2540]">Ask AI</h2>
      </div>

      <div className="text-center text-sm text-gray-600 mb-4">
        Need more help? Ask our AI-powered assistant for instant answers!
      </div>

      <div className="grid grid-rows-5 bg-white border border-[#BEBEBE] flex-1 max-h-[363px] rounded-lg p-4 h-80 overflow-y-auto no-scrollbar">
          <div className="row-span-4 space-y-4 grow-4 overflow-y-scroll no-scrollbar ">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="row-span-1 mt-4 flex items-center relative bottom-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question here..."
              className="w-full text-[12px] p-3 pr-12 h-[49px] border border-[#DBDBDB] rounded-l-4xl focus:outline-none focus:ring-1 focus:ring-[#0056b3]"
            />
            <button
              onClick={handleSendMessage}
              className=" bg-[#0056b3] text-white rounded-r-4xl p-3 h-[49px] w-[56px]  shadow-md hover:bg-[#004494]"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
      </div>
    </div>
  );
}
