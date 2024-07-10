import { DocItem } from "./DocItem"

export const DocsList = () => {
    return (
        <div className="w-full h-full bg-[#009E62] p-4 text-white overflow-hidden">
            <h1 className="text-2xl font-semibold mb-2">Document Officiels.</h1>
            <div className="w-full flex gap-2 flex-col">
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
                <DocItem />
            </div>
        </div>
    )
}