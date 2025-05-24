import { useState } from "react";

const Ai = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-lg shadow-lg border p-3 cursor-pointer hover:shadow-xl transition-shadow max-w-xs"
               onClick={() => setIsOpen(true)}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">🤖</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 mb-1">Hi, I'm Fin AI Copilot</div>
                <div className="text-xs text-gray-500 leading-relaxed">Ask me anything about this conversation</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-40 transition-all duration-300 ease-in-out border-l border-gray-200
          ${isOpen ? 'w-1/2 md:w-96' : 'w-0 overflow-hidden'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">🤖</span>
            </div>
            <span className="font-medium text-gray-900">AI Copilot</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 rounded">Details</button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <div className="text-2xl">👋</div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hi, I'm Fin AI Copilot</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Ask me anything about this conversation</p>
            
            <div className="w-full max-w-sm">
              <div className="text-left mb-2">
                <span className="text-xs font-medium text-gray-700">Suggested</span>
              </div>
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border text-sm text-gray-700 transition-colors">
                💡 How do I get a refund?
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <input
              type="text"
              placeholder="Use ⌘K for shortcuts"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ai
