import { useState } from "react";
import Messages from './Messages'

const Inbox = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const messages = [
    {
      id: 1,
      sender: "Luis Easton",
      subject: "Hey! I have a question about...",
      preview:
        "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out that they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
      reply: "Let me just look into this for you, Luis.",
      time: "1min",
      status: "Open",
      avatar: "L",
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      sender: "Ivan · Nike",
      subject: "Hi there, I have a qu...",
      preview:
        "Hi, I recently ordered a pair of shoes and wanted to check if I can change the size before it ships out.",
      reply: "Sure Ivan, let me help with that!",
      time: "3min",
      status: "Awaiting",
      avatar: "I",
      avatarColor: "bg-red-500",
      hasNotification: true,
    },
    {
      id: 3,
      sender: "Lead from New York",
      subject: "Good morning, let me...",
      preview:
        "I'm interested in your platform and was wondering if we could schedule a demo sometime next week.",
      reply: "Happy to hear that! I'll send over some time slots.",
      time: "40min",
      status: "New Lead",
      avatar: "L",
      avatarColor: "bg-blue-500",
      hasNotification: true,
    },
    {
      id: 4,
      sender: "Booking API problems",
      subject: "Bug report",
      preview:
        "Luis · Email Crafts — We're seeing 500 errors intermittently when trying to confirm a booking.",
      reply: "Thanks for the report, we're investigating the API errors.",
      time: "45min",
      status: "Technical",
      avatar: "🐛",
      avatarColor: "bg-gray-800",
    },
    {
      id: 5,
      sender: "Miracle · Exemplary Bank",
      subject: "Hey there, I'm here to...",
      preview:
        "Hey there, I'm here to follow up on our last conversation regarding invoice reconciliation and ledger matching.",
      reply: "Thanks Miracle! Let me take a closer look and get back to you.",
      time: "45min",
      status: "Follow-up",
      avatar: "M",
      avatarColor: "bg-blue-500",
    },
  ];

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white h-screen  border-r border-gray-200">
        <div className={`flex-col ${selectedIndex ? 'hidden md:flex' : 'flex'} h-full `}>
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-gray-900">Your inbox</h1>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button className="px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800">
                  Close
                </button>
              </div>
            </div>
            
            
            <div className="flex gap-3 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-gray-700">6 Open</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-700">Waiting longest</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(item.id)}
                className={`flex items-start gap-3 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedIndex === item.id ? "bg-blue-50 border-l-2 border-l-blue-500" : ""
                }`}
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${item.avatarColor}`}>
                    {item.avatar}
                  </div>
                  {item.hasNotification && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm text-gray-900 truncate">{item.sender}</p>
                    <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{item.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate leading-relaxed">{item.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Messages Panel */}
      <div className="flex-1">
        <Messages
          userId={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default Inbox;

