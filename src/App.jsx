import { useState } from "react";

import ChatBar from "./components/ChatBar"
import ChatView from "./components/ChatView"
import ChatSide from "./components/ChatSide"

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [useOpenAPI, setUseOpenAPI] = useState(false);

  const toggleUseOpenAPI = () => {
    setUseOpenAPI(!useOpenAPI);
  };

  return (
    <div className="bg-gray-700 min-h-screen max-w-screen-md mx-auto flex">
      <div>
        <div className="bg-black w-24 text-white">
            <div className="flex">
                <img src="/images/openai_chatgpt_circle.png" alt="Logo" className="w-6 h-6 mx-2 my-2" />
                <span className="ml-2 my-2  font-bold">ChatGPT</span>
            </div>
        </div>
        <ChatSide chatList={chatList}/>      
      </div>
      <div className="bg-gray-100 grow flex flex-col h-screen">
        <div className="bg-gray-200 font-bold text-lg p-2">
          <span>
            API Connected :  
          </span>
          <button onClick={toggleUseOpenAPI}>
            {useOpenAPI ? "On" : "Off"}
          </button>
        </div>
        <ChatView chatList={chatList}  />
        <ChatBar chatList={chatList} setChatList={setChatList} useOpenAPI={useOpenAPI} />
      </div>
    </div>
  );
};

export default App;
