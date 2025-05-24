import Ai from "./Ai";

const Messages = ({ userId, onClose, messages }) => {
  const message = messages?.find((msg) => msg.id === userId);

  if (!message) {
    return (
      <div className=" flex-1 flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-red-500 text-white text-center p-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">No Conversation Selected</h2>
          <p className="text-sm opacity-90">Please select a message to view conversation.</p>
        </div>
      </div>
    );
  }

  return (
   <div className="flex-1" >
     <div className="flex flex-col h-screen bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-900">{message.sender}</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Close
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <div className="space-y-6 max-w-3xl">
          {/* Incoming Message */}
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm ${message.avatarColor}`}>
              {message.avatar}
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border max-w-lg">
                <p className="text-sm text-gray-900 leading-relaxed">{message.preview}</p>
              </div>
              <div className="mt-2 text-xs text-gray-500 ml-1">
                {message.time}
              </div>
            </div>
          </div>

        
          {message.reply && (
            <div className="flex items-start gap-3 justify-end">
              <div className="flex-1 flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg px-4 py-3 shadow-sm max-w-lg">
                  <p className="text-sm leading-relaxed">{message.reply}</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                Y
              </div>
            </div>
          )}
          
          {message.reply && (
            <div className="flex justify-end mr-11">
              <div className="text-xs text-gray-500">
                Seen • {message.time}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <input
          type="text"
          placeholder="Type your reply..."
          disabled
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50"
        />
      </div>
      <Ai/>

    
    </div>
   </div>
  );
};


export default Messages
