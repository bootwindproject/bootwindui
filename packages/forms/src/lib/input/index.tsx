import React, { ReactNode, useId } from 'react';
import { cn } from "@bootwind/common"

type InputVariant = "default" | "error" | "warning" | "success"
export interface InputProps {
  id?: string
  type?: string
  className?: string
  name?: string
  variant?: InputVariant
  label?: string
  placeholder?: string
  disabled?: boolean,
  description?: string | ReactNode
  leftSection?: string | ReactNode
  rightSection?: string | ReactNode
}
export const Input: React.FC<InputProps> = ({
  id = useId(),
  label,
  type = "text",
  className,
  variant = "default",
  description,
  name,
  placeholder,
  disabled = false,
  leftSection,
  rightSection
}) => {
  const variantMap: Record<InputVariant, {input: string, description: string}> = {
    error: {
      input: 'bg-red-50 focus:bg-white border-red-300 focus:border-red-400 focus:ring-red-100',
      description: 'text-red-500',
    },
    default: {
      input: 'border-gray-300 focus:bg-white hover:border-gray-900 focus:border-gray-400 focus:ring-gray-300',
      description: 'text-zinc-500',
    },
    success: {
      input: 'bg-green-50 focus:bg-white border-green-300 hover:border-green-900 focus:border-green-400 focus:ring-green-100',
      description: 'text-green-500',
    },
    warning: {
      input: 'bg-orange-50 focus:bg-white border-orange-300 hover:border-orange-900 focus:border-orange-400 focus:ring-orange-100',
      description: 'text-orange-500',
    },
  }
  const classes = variantMap[variant]
  const inputClasses = `transition duration-200 placeholder:text-gray-400 
                        shadow
                        rounded-lg
                        focus:ring-4
                        text-gray-900 
                        py-2.5 px-3.5
                        w-80 max-w-full
                        disabled:bg-neutral-100
                        disabled:cursor-not-allowed
                        ${classes.input}
                        ${leftSection ? 'pl-14' : ''}
                        ${rightSection ? 'pr-14' : ''}
                        `
  return (
    <div className={cn("input-group mb-3", className)}>
      { label && (
        <div className='bootwind-label mb-2'>
          <label className='text-neutral-600 leading-tight font-medium' htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={`input-area relative inline-block ${leftSection ? 'has-left-section' : ''} ${rightSection  ? 'has-right-section' : ''}`}>
        {leftSection && (
          <label htmlFor={id} className="input-left-section absolute items-center left-0 top-0 flex justify-center h-full w-14">
            { leftSection }
          </label>
        )}
        <input type={type} placeholder={placeholder} id={id} name={name} className={inputClasses} disabled={disabled}/>
        {rightSection && (
          <label htmlFor={id} className="input-right-section absolute items-center right-0 top-0 flex justify-center h-full w-14">
            { rightSection }
          </label>
        )}
      </div>
      <span className={`${classes.description} flex gap-2 items-center text-sm mt-2`}>{description}</span>
    </div>
  );
};

export default Input;
