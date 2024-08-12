import React from 'react';

const ChatBody = () => {
    const aistyle="bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"
  return (
   <div className="flex flex-col gap4">
    {/* {Client messagel} */}
    <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3  py-3 max-w-[80%]'>
        <pre className='whitespaces-pre-wrap'>
            <span>Hi Chat GPT, can you help me?</span>
        </pre>
    </div>

    {/* AI REPSONT */}
        <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3  py-3 max-w-[80%]'>
        <pre  className= 'whitespaces-pre-wrap ${aistyle}`}>
            <pre>
            <span>Yeah, I can help you with anything</span>
        </pre> 
    </div>


   </div>
  );
}

export default ChatBody;
