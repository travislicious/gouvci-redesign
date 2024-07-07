import React from 'react'

interface Props {
    name: string
    icon: JSX.Element
    description: string
}

export const FeatureItem: React.FC<Props> = ({name, icon, description}) => {
    return (
        <div className="w-[27rem] bg-[#FFB534] h-72 md:w-full p-3 flex flex-col items-center text-neutral-100">
            { icon }
            <a className="w-full text-center text-2xl mt-2" href='#'>{name}</a>
            <h1 className='text-lg'>{description}</h1>
        </div>
    )
}