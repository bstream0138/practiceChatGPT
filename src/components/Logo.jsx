import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-between items-center p-4">
        <div className="flex items-center flex-grow">
            <img src="/images/openai_chatgpt_circle.png" alt="Logo" className="w-6 h-6" />
            <span className="ml-2 text-lg">ChatGPT</span>
        </div>      
        <button className="py-2 px-2 bg-white text-black rounded">Start</button>
    </div>
  );
};

export default Logo;
