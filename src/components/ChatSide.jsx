import ChatSideCard from "./ChatSideCard"

const ChatSide = ({chatList}) => {
    return (
        <ul className="w-[20vw] overflow-y-auto">
            { [...chatList].reverse().map((v, i) => (
                <ChatSideCard key={i} question={v.question} answer={v.answer} />
            ))}
        </ul>
    );
};

export default ChatSide;