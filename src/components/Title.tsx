import { useEffect, useState } from "react";
import Button from "./Button";

interface TitleProps {
    text: string
}

const Title = ({ text }: TitleProps) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (window) {
            if (localStorage.getItem('theme') === 'dark')
                setTheme('dark');
            else
                setTheme('light');
        }
    }, []);

    useEffect(() => {
        const root = document.querySelector('html');

        if (window) {
            if (theme === 'dark') {
                localStorage.setItem('theme', 'dark');
                root.classList.add('dark');
            } else {
                localStorage.setItem('theme', 'light');
                root.classList.remove('dark');
            }
        }
    }, [theme]);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row px-7 py-3 justify-between">
                <h1 className="text-4xl">
                    {text}
                </h1>
                <Button className="text-xl" onClick={() => {
                    if (theme === 'light')
                        setTheme('dark');
                    else
                        setTheme('light');
                }}>
                    Change to {theme === 'dark' ? 'light' : 'dark'} mode
                </Button>
            </div>
            <hr className="border-2 border-purple-500 mx-5" />
        </div>
    );
};

export default Title;
