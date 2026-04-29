import React from 'react'

const HeadContainer = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="w-15 h-[3px] bg-blue-400 mr-2"></div>
      <p className="text-blue-400 uppercase font-semibold">{text}</p>
    </div>
  )
}

export default HeadContainer