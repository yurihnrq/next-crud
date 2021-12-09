interface TitleProps {
    text: string
}

const Title = ({text}: TitleProps) => {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="p-3 text-4xl">
                {text}
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    );
};

export default Title;
