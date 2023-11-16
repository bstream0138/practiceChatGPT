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
        <div className="bg-gray-300 h-24">
            <form 
                className="bg-gray-300 h-full flex items-center px-4"
                onSubmit={onSubmitChat}
            >
                <input 
                    className={`bg-gray-200 grow 
                        py-2 px-2 border-2 
                        focus:outline-none 
                        focus:border-gray-400`}
                    type="text"
                    value={newMessage}
                    disabled={isLoading}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Message ChatGPT..."
                />
                <button
                    className={`bg-gray-400 w-10 
                        text-sm
                        py-[12px]
                        hover:bg-white 
                        active:bg-white
                        items-center
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