
interface PersonProps {
    online?: boolean;
    image: any;
}

export function PersonCard({ image }: PersonProps) {
    return (
        <div className={`w-12 h-12 rounded-full relative box-content `}>
            <img className="rounded-full absolute" src={image} alt="" />
        </div>
    )

}
export function PersonAutentication({ image }: PersonProps) {
    return (
        <div className={`w-8 h-8 rounded-full relative border-2 box-content`}>
            <img className="rounded-full absolute" src={image} alt="" />
            <div className="absolute bg-green-cp w-3 h-3 right-0 rounded-full border-2 border-red-100 border-primary" />
        </div>
    )

}