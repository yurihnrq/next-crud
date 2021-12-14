// Para entender mais sobre o funcionanmento do operador ".?" (encadeamento opcional), consulte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining
interface ButtonProps {
    color?: 'green' | 'blue' | 'red'
    className?: string
    children: any
    onClick?: () => void
}

const Button = ({ children, color, className, onClick }: ButtonProps) => {

    const buttonColor = color ?? 'blue';

    return (
        <button 
            className={`
                bg-gradient-to-r from-${buttonColor}-400 to-${buttonColor}-500
                text-white px-3 py-2 rounded-md
                dark:text-gray-200 dark:from-${buttonColor}-700 dark:to-${buttonColor}-800
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
