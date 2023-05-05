import React from "react"

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export const Input = ({ label, ...rest } : IInputProps) => {
    return (
        <div className="w-full">
            {!!label && (
                <label data-testid="label" htmlFor={label} className="ml-1 mt-2 block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            )}
            <input {...rest} name={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    )
}