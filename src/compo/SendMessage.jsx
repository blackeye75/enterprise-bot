// import React from 'react'

// const SendMessage = () => {
//   return (
//     <div className='p-5 bg-gray-300 absolute bottom-5 w-[66%] h-[18vh] rounded-xl border-t-[1px] flex items-start' >
//         <input type="text" className='w-full bg-transparent outline-none'  placeholder='Type your message here' />
//         <button className='w-[8%]  rounded-md h-[50%] bg-[#00A0AE]' >Send</button>
//     </div>
//   )
// }

// export default SendMessage

import React from "react";

const SendMessage = () => {
  return (
    <div className="p-5 bg-gray-300 absolute bottom-5 w-[66%] h-[18vh] rounded-xl border-t-[1px] flex items-start">
      <input
        type="text"
        className="w-full bg-transparent outline-none"
        placeholder="Type your message here"
      />
      <button className="w-[8%] rounded-md h-[50%] text-white bg-[#00A0AE] ml-3">
        Send
      </button>
    </div>
  );
};

export default SendMessage;
