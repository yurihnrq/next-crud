import useTheme from "../hooks/useTheme";
import Button from "./Button";

interface TitleProps {
    text: string
}

const Title = ({ text }: TitleProps) => {

	const[ theme, setTheme ] = useTheme();

	return (
		<div className="flex flex-col">
			<div className="flex flex-row flex-wrap px-7 py-3 justify-between">
				<h1 className="text-4xl mb-3 md:m-auto">
					{text}
				</h1>
				<Button className="text-xl" onClick={() => {
					theme === "light" ? setTheme("dark") : setTheme("light");
				}}>
                    Mudar para modo {theme === "dark" ? "claro" : "escuro"}
				</Button>
			</div>
			<hr className="border-2 border-purple-500 mx-5" />
		</div>
	);
};

export default Title;
