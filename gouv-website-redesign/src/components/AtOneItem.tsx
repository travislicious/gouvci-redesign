import React from 'react'

interface Props {
    content: string,
    date: string,
}

export const AtOne: React.FC<Props> = ({content, date}) => {
    return (
        <div className="w-full bg-[#009E62] text-background p-4 ">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl">À la une.</h1>
                <h1 className="text-lg">{date}</h1>
            </div>
            <h1 className="text-lg my-4">{content}</h1>
        </div>
    )
}
