
const ChatCard = ({ id, answer, question}) => {
    return (
        <li className="my-8">
            <div className="mb-4">
                <div className="flex">
                    <img src="/images/person_question.png" alt="M" className="w-6 h-6" />                    
                    <span className="ml-2  font-bold">You</span>
                </div>
                <div className="ml-8">
                    {question}
                </div>                
            </div>
            <div className="mb-4">
                <div className="flex">
                    <img src="/images/chatgpt_answer.png" alt="G" className="w-6 h-6" />
                    <span className="ml-2 font-bold">ChatGPT</span>
                </div>
                <div className="ml-8">
                    {answer}
                </div>
            </div>
        </li>
    );
};

export default ChatCard;