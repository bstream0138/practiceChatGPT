import { useEffect, useRef } from "react";
import ChatCard from "./ChatCard.jsx"

    /* 
    // 스크롤 추가 기존 방안
const ChatView = ({ chatList }) => {


    
    const ulRef = useRef();

    useEffect(() => {
        ulRef.current.scrollTop = ulRef.current.scrollHeight;
    }, [chatList]);

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-end">
            <ul ref={ulRef} className="mb-24 overflow-y-auto">
                { chatList.length === 0 ? (
                    <div className={`
                        absolute top-1/3 left-1/2 
                        flex flex-col 
                        items-center font-bold`}>
                        <img src="/images/openai_chatgpt.png" alt="G" className="w-12 h-12 my-4" />
                        <span className="ml-2 font-bold">How can I help you today?</span>
                    </div>
                ) : (chatList.map((v, i) => (
                    <>
                        <ChatCard 
                            key={i} 
                            answer={v.answer} 
                            question={v.question}
                        />
                    </>
                ))
                )}  
                
            </ul>
        </div>

    );
};
*/

const ChatView = ({ chatList }) => {

    const endOfListRef = useRef();

    useEffect(() => {
        console.log(endOfListRef);
        endOfListRef.current?.scrollIntoView({behavior:"smooth"});
    }, [chatList]);

    return (
        <div className="bg-gray-100 overflow-y-auto flex-grow">
            <ul>
                { chatList.length === 0 ? (
                    <div className={`
                        absolute top-1/3 left-1/2 
                        flex flex-col 
                        items-center font-bold`}>
                        <img src="/images/openai_chatgpt.png" alt="G" className="w-12 h-12 my-4" />
                        <span className="ml-2 font-bold">How can I help you today?</span>
                    </div>
                ) : (chatList.map((v, i) => (
                    <>
                        <ChatCard 
                            key={i} 
                            answer={v.answer} 
                            question={v.question}
                        />
                        <div ref={endOfListRef} />
                    </>
                ))
                )}  
                
            </ul>
        </div>

    );
};

export default ChatView;