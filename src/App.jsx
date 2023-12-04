import { useState } from "react";

import Logo from "./components/Logo"
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
    <div className="bg-gray-100 h-screen flex">
      <div className="flex-col w-1/6 bg-gray-800 text-white">
        <Logo />
        <ChatSide chatList={chatList}/>
      </div>

      <div className="flex-grow bg-white flex flex-col">
        <div className="p-4 bg-gray-100 font-bold">
          <button onClick={toggleUseOpenAPI}>
            {useOpenAPI ? "ChatGPT-3.5" : "Not connected"}
          </button>
        </div>
        <div className="flex-grow overflow-auto">
          <ChatView chatList={chatList}  />
        </div>
        <div className="p-4">
          <ChatBar chatList={chatList} setChatList={setChatList} useOpenAPI={useOpenAPI} />
        </div>
      </div>
    </div>
  );
};

export default App;
