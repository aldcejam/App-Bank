interface HeaderProps {
    details: string;
    text: string;
}

export function Header({ text, details }: HeaderProps) {
    return (
        <header className="mx-3 pt-5">
            <div>
                <span>
                    {details}
                </span><br />
                <span className="font-bold text-2xl">
                    {text}
                </span>
            </div>
            <div><img src="https://github.com/aldcejam" alt="" /></div>
        </header>
    );
}