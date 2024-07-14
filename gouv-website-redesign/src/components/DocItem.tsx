import React from 'react'

interface Item {
    name: string,
    link: string,
    date: string,
}

export const DocItem: React.FC<Item> = ({name, link, date}) => {
    return (
        <div className="border border-[#1ebe81] w-full p-2 text-white flex gap-2 justify-between hover:bg-[#1ebe81] hover:scale-105 transition-all duration-200">
            <a className="w-full truncate" href={link} download={`${name}.pdf`}>{name}</a>
            <div>{date}</div>
        </div>
    )
}