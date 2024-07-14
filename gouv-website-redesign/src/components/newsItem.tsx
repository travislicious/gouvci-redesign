import React from 'react'

interface Props {
    title: string,
    content: string,
    date: string
}

export const NewsItem: React.FC<Props> = ({title, content, date}) => {
    return (
        <div className="w-[27rem] bg-[#F57F01] h-64 md:w-full p-3 flex flex-col items-center text-neutral-100 hover:scale-95 transition-all duration-200">
            <div className="flex w-full gap-2">
                <div className="flex flex-col gap-1 w-full">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <h1 className="italic">{date}</h1>
                </div>
                <a className="w-full text-right text-lg underline cursor-pointer" href="#">Lire la suite.</a>
            </div>
            <h1 className="w-full flex items-end h-full">{content}</h1>
        </div>
    )
}