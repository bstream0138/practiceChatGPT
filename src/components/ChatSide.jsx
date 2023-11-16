import ChatSideCard from "./ChatSideCard"

const ChatSide = ({chatList}) => {
    return (
        <ul>
            { chatList?.map((v, i) => (
                <ChatSideCard key={i} question={v.question} answer={v.answer} />
            ))}
        </ul>
    );
};

export default ChatSide;