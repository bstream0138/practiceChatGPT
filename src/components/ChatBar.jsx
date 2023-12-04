import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg"
import { FiArrowUp } from "react-icons/fi";

import axios from "axios";

const ChatBar = ({chatList, setChatList, useOpenAPI}) => {

    const [newMessage, setNewMessage ] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitChat = async (e) => {
        console.log("Send: ", newMessage);

        try {
            e.preventDefault();

            if(!newMessage) return;

            setIsLoading(true);

            let responseMessage;

            if(useOpenAPI){
                const response = await axios.post(
                    "https://api.openai.com/v1/chat/completions",
                    {
                        "model":"gpt-3.5-turbo",
                        "messages":[
                            {
                                "role": "user",
                                "content": newMessage,
                            },
                        ],            
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.REACT_APP_OPENAPI_KEY}`,
                        },
                    }
        
                );
                responseMessage = response.data.choices[0].message.content

            } else{
                responseMessage = "현재 ChatGPT에 연결된 상태가 아닙니다."
            }

            console.log("Receive: ", responseMessage);   
            setChatList([...chatList, 
                { 
                    question: newMessage, 
                    answer: responseMessage,
                },
            ]);

            //useRef -> y좌표를 0으로

            setNewMessage("");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    };

    
    useEffect(() => {
        console.log(newMessage);
    }, [newMessage]);

    return (
        <div className="h-24 p-4">
            <form 
                className="bg-white h-full flex items-center rounded-lg"
                onSubmit={onSubmitChat}
            >
                <input 
                    className={`bg-gray-100 grow 
                        py-2 px-2 
                        border-2 border-gray-300 rounded-l-lg 
                        focus:outline-none 
                        focus:border-gray-400`}
                    type="text"
                    value={newMessage}
                    disabled={isLoading}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Message ChatGPT..."
                />
                <button
                    className={`bg-gray-200 w-10 flex justify-center items-center
                        text-sm
                        py-[12px]
                        hover:bg-gray-300 
                        active:bg-gray-300
                        rounded-r-lg                        
                        `}
                    type="submit"
                    value="Send message"
                    disabled={isLoading}
                >
                    {isLoading? (<CgSpinner className="animate-spin-slow" size={22} />) : (<FiArrowUp size={22} />)}
                </button>

            </form>
        </div>
    );

};

export default ChatBar;