import React from 'react'

const SideBarIcons = ({ icon, text = 'tooltip' }) => {
    return (
        <div className='relative flex items-center justify-center h-12 w-12 my-2 mx-auto shadow-lg bg-gray-600 text-green-500 hover:bg-green-500 hover:text-white rounded-3xl hover:rounded-xl duration-300 cursor-pointer group'>
            {icon}
            <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold duration-100 scale-0 origin-left group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideBarIcons