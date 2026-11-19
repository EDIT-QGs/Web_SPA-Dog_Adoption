import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, id, rightIcon, ...props }) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={inputId} className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {label}
            </label>
            <div className="relative flex items-center w-full">
                <input
                    id={inputId}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none transition-all duration-200 ${
                        error 
                            ? "border-red-400 focus:ring-2 focus:ring-red-100 text-red-900" 
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950"
                    } ${rightIcon ? "pr-10" : ""}`}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute right-3 flex items-center text-gray-400 cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
            {error && (
                <span className="text-xs text-red-500 font-medium ml-1">
                    {error}
                </span>
            )}
        </div>
    );
};