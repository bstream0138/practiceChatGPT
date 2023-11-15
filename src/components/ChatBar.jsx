import { useEffect, useState } from "react";

const ChatBar = () => {

    const [newMessage, setNewMessage ] = useState("");

    useEffect(() => console.log(newMessage), [newMessage]);

    const onSubmitChat = async (e) => {
        try {
            e.preventDefault();

            console.log(newMessage);

        } catch (error) {
            console.error(error);
        }

    };

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
                    onChange={(e) => setNewMessage(e.target.value)}
                    >

                </input>
                <input 
                    className={`bg-gray-400 w-32 
                        text-sm 
                        py-[12px]
                        hover:bg-white 
                        active:bg-white`}
                    type="submit"
                    value="Send message"
                    >
                    
                </input>
            </form>
        </div>
    );

};

export default ChatBar;