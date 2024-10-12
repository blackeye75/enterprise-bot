import React from 'react'

const SingleSession = ({name,PreviewMessage,lastseen,avatar}) => {
    // console.log(name);
  return (
    <div className='w-full border-t-[1px] border-b-[1px] h-[5vw] flex ' >
      <div className='avatar w-[20%] overflow-hidden flex items-center justify-center' >
        <img className='w-12 h-12 rounded-full' src={avatar} alt="" />
      </div>
      <div className='content w-[65%] flex flex-col justify-center' >
        <div className='name text-normal font-[500]' >{name}</div>
        <div className='messagePreview text-xs line-clamp-1 font-normal'>{PreviewMessage}</div>
      </div>
      <div className='w-[20%] h-full flex justify-center items-start pt-4' >
      <div className='timeDuration font-[400] text-xs' >{lastseen}</div>  
      </div>
    </div>
  )
}

export default SingleSession