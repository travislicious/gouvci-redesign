import { DocItem } from "./DocItem"
import React from 'react'

interface Props {
    items: Item[]
}
interface Item {
    name: string,
    link: string,
    date: string,
}



export const DocsList: React.FC<Props> = ({items}) => {
    return (
        <div className="w-full h-full bg-[#009E62] p-4 text-white overflow-hidden">
            <h1 className="text-2xl font-semibold mb-2">Document Officiels.</h1>
            <div className="w-full flex gap-2 flex-col">
            { items?.map((item) => {
                return <DocItem key={item.name} name={item.name} link={item.link} date={item.date}/>
            })}
            </div>
        </div>
    )
}