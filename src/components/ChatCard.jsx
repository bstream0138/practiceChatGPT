
const ChatCard = ({ id, answer, question}) => {
    return (
        <li className="my-8 ml-4">
            <div className="mb-4">
                <div className="flex">
                    <img src="/images/github_icon.png" alt="M" className="w-6 h-6" />                    
                    <span className="ml-2  font-bold">You</span>
                </div>
                <div className="ml-8 whitespace-pre-wrap">
                    {question}
                </div>                
            </div>
            <div className="mb-4">
                <div className="flex">
                    <img src="/images/chatgpt_answer.png" alt="G" className="w-6 h-6" />
                    <span className="ml-2 font-bold">ChatGPT</span>
                </div>
                <div className="ml-8 whitespace-pre-wrap">
                    {answer}
                </div>
            </div>
        </li>
    );
};

export default ChatCard;