const fixedInputClass: string = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
interface InputComp {
    handleChange?: any,
    value?: string,
    labelText?: string,
    labelFor?: string,
    id?: string,
    name?: string,
    type?: string,
    isRequired?: boolean,
    placeholder?: string,
    customClass?: string
}


export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
}: InputComp) {
    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
                autoComplete={id === "password" ? "current-password" : ""}
            />
        </div>
    )
}