export default function ChatMessage({ message }) {
  return (
    <div className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
      {!message.isUser && (
        <div className="flex items-center justify-center h-8 w-8  mr-2">
          <img src="/bot.png" alt="" className=" h-[40px] w-[40px]" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-3 text-[12px] ${
          message.isUser
            ? "bg-[#0056b3] text-white rounded-br-none"
            : "bg-[#E2F0F7] border border-gray-200 rounded-bl-none"
        }`}
      >
        {message.text}
      </div>
      {message.isUser && (
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 ml-2">
          {message.profileImage && (
            <img
              src={message.profileImage}
              alt="User Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
}
