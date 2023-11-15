import { useState } from "react";

import ChatBar from "./components/ChatBar"
import ChatView from "./components/ChatView"
import ChatCard from "./components/ChatCard"

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [useOpenAPI, setUseOpenAPI] = useState(false);

  const toggleUseOpenAPI = () => {
    setUseOpenAPI(!useOpenAPI);
  };

  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-black w-52 text-white">
        <div className="flex">
            <img src="/images/openai_chatgpt_circle.png" alt="Logo" className="w-6 h-6" />
            <span className="ml-2  font-bold">ChatGPT</span>
        </div>
      </div>
      <div className="bg-gray-100 grow flex flex-col h-screen">
        <div className="bg-gray-100 font-bold text-lg p-2">
          <span>
            ChatGPT Connected :  
          </span>
          <button onClick={toggleUseOpenAPI}>
            {useOpenAPI ? "On" : "Off"}
          </button>
        </div>
        <div className="overflow-y-auto flex-grow">
          <ChatView chatList={chatList}  />
        </div>
        <div className="bg-gray-100 p-2">
          <ChatBar chatList={chatList} setChatList={setChatList} useOpenAPI={useOpenAPI}/>
        </div>        
      </div>
    </div>
  );
};

export default App;
