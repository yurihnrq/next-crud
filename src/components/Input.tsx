interface InputProps {
    type?: 'text' | 'number';
    label: string;
    value: any;
    readonly?: boolean;
    placeHolder?: string;
    className?: string;
    setValue?: (value: any) => void;
}

const Input = ({ label, type, value, readonly, placeHolder, className, setValue}: InputProps) => {
    return (
        <div className={`flex flex-col ${className ?? ''}`}>
            <label className="mb-3">
                {label}
            </label>
            <input
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-2 py-1
                    ${readonly ? '' : 'focus:bg-white'}
                    dark:bg-gray-300 dark:text-black
                `}
                type={type ?? 'text'} value={value} readOnly={readonly ?? false}
                placeholder={placeHolder ?? ''} min={0} minLength={4}
                onChange={e => { setValue?.(e.target.value) }}
            />
        </div>
    )
}

export default Input;
