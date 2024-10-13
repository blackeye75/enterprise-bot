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
    <div className="sm:p-5 p-2 bg-gray-300 fixed bottom-5 sm:w-[66%] w-[90%] sm:h-[18vh] h-[6vh] rounded-xl border-t-[1px] flex items-start">
      <input
        type="text"
        className="w-full bg-transparent outline-none"
        placeholder="Type your message here"
      />
      <button className="sm:w-[8%] w-[25%]  rounded-md sm:h-[50%] h-full
       text-white bg-[#00A0AE] ml-3">
        Send
      </button>
    </div>
  );
};

export default SendMessage;
