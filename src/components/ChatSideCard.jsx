import {useState} from "react";
import { CgCloseR } from "react-icons/cg";

const ChatSideCard = ({key, question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickModal = () => {
        setIsOpen(true);
    };

    const onClickClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <li key={key} 
                className={`mb-2 ml-2 truncate 
                    cursor-pointer text-gray-300 
                    hover:text-white hover:font-bold
                    `}
                onClick={onClickModal}
            >
                {question}
            </li>
            {isOpen && (
                <div className="fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-10">
                    <div className="bg-white rounded-xl flex flex-col fixed p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button onClick={onClickClose} className="self-end mb-4">
                            <CgCloseR size={20} />
                        </button>
                        <div>
                            <div className="flex">
                                <img src="/images/github_icon.png" alt="M" className="w-6 h-6" />                    
                                <span className="ml-2  font-bold">You</span>
                            </div>
                            <div className="ml-8 whitespace-pre-wrap">
                                {question}
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <img src="/images/chatgpt_answer.png" alt="G" className="w-6 h-6" />
                                <span className="ml-2 font-bold">ChatGPT</span>
                            </div>
                            <div className="ml-8 whitespace-pre-wrap">
                                {answer}
                            </div>
                        </div>                                        
                    </div>
                </div>
            )}
        </>
        
    );
};

export default ChatSideCard;
