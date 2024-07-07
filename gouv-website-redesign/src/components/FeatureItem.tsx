import React from 'react'

interface Props {
    name: string
    icon: string
    description: string
}

export const FeatureItem: React.FC<Props> = ({name, icon, description}) => {
    return (
        <div className="w-[27rem] bg-[#FFB534] h-64 md:w-full p-3 flex flex-col items-center text-neutral-100">
            <img src={icon} alt="" className="w-full h-full"/>
            <a className="w-full text-center text-2xl mt-2" href='#'>{name}</a>
            <h1>{description}</h1>
        </div>
    )
}