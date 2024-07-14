import React from 'react'
import { useState } from 'react'

interface Props {
    items: Item[]
}

interface Item {
    title: string,
    content: string,
    date: string
}

export const FocusItem: React.FC<Props> = ({items}) => {
    const [index, setIndex] = useState(1)

    function changeNews() {
        if (index === items.length) {
            setIndex(1)
        }
        else {
            setIndex(index + 1)
        }
    }

    return (
        <div className="w-full bg-[#F57F01] p-4 text-background">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-semibold border-l-4 pl-2 border-background border-[#fab163]">Focus.</h1>
                <h1 className="text-xl cursor-pointer" onClick={changeNews}>{`${index}/${items.length}`}</h1>
            </div>
            <div>
                <h1 className="my-4 text-lg">{items[index - 1]?.content as string}</h1>
                <a className="italic" href='#'>Lire la suite.</a>
            </div>
        </div>
    )
}