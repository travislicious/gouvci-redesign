import React from 'react'

interface Props {
    title: string,
    content: string
}

export const FlashNewsItem: React.FC<Props> = ({title, content}) => {
    return (
        <div className="border-[#1ebe81] w-full md:w-[30rem] bg-transparent max-h-96 border xl:w-full">
            <div className="w-full h-full bg-[#189464] p-6 xl:p-5 hover:bg-[#16865b] transition-colors duration-200 cursor-pointer group">
            <h1 className="text-xl text-white mb-1 group-hover:text-white/80 transition-colors duration-200 truncate">{title}</h1>
            <h1 className="text-lg text-white group-hover:text-white/80 transition-colors duration-200 ">{content}</h1>    
            </div>
        </div>
    )
}