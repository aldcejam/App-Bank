interface PersonProps {
    online?: boolean;
    image: any;
    height: string;
    width: string;
}

export function Person({ online, image,width, height }: PersonProps) {
    return online ? (
        <div className={`${width} ${height} rounded-full relative border-2 box-content `}>
            <img className="rounded-full absolute" src={image} alt="" />
            <div className="absolute bg-green-cp w-3 h-3 right-0 rounded-full border-2 border-red-100 border-primary" />
        </div>
    ) : (
        <div className={`${width} ${height} rounded-full relative box-content `}>
            <img className="rounded-full absolute" src={image} alt="" />
        </div>
    )

}