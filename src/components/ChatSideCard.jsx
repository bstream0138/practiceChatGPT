
const ChatSideCard = ({key, question, answer}) => {
    return (
        <li key={key} 
            className={`mb-2 ml-2 truncate 
                cursor-pointer text-gray-300 
                hover:text-white hover:font-bold
                `}>
            {question}
        </li>
    );
};

export default ChatSideCard;