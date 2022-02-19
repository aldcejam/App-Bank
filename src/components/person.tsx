interface PersonProps {
    online?: string
    image: string
}

export function Person({ online, image }: PersonProps) {
    return online ? (
        <div className="w-8 h-8 rounded-full relative border-green-weak-cp border-2 box-content ">
            <img className="rounded-full absolute" src={image} alt="" />
            <div className="absolute bg-green-cp w-3 h-3 right-0 rounded-full border-2 border-red-100 border-primary" />
        </div>
    ) : (
        <div className="w-8 h-8 rounded-full relative border-green-weak-cp border-2 box-content ">
            <img className="rounded-full absolute" src={image} alt="" />
        </div>
    )

}