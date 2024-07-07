export function NewsItem() {
    return (
        <div className="w-[27rem] bg-[#FFB534] h-64 md:w-full p-3 flex flex-col items-center text-neutral-100">
            <div className="flex w-full gap-2">
                <div className="flex flex-col gap-1 w-full">
                    <h1 className="text-2xl font-semibold">News Title</h1>
                    <h1 className="italic">News Date</h1>
                </div>
                <h1 className="w-full text-right text-lg underline">Read more.</h1>
            </div>
            <h1 className="w-full flex items-end h-full">Lorem ipsum dolor sitamet consectetur adipisicing elit. Quasi doloribus nihil reprehenderit iusto! Ratione, natus quam. In porro asperiores debitis perferendis praesentium. Eos ut, quia quibusdam reprehenderit numquam necessitatibus suscipit.</h1>
        </div>
    )
}