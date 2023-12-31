import React, { ReactNode, useId } from 'react';
import { cn } from "@bootwind/common"

type TextareaVariant = "default" | "error" | "warning" | "success"
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
  className?: string
  name?: string
  variant?: TextareaVariant
  label?: string
  placeholder?: string
  filled?: boolean
  disabled?: boolean
  description?: string | ReactNode
  leftSection?: string | ReactNode
  rightSection?: string | ReactNode
}
export const Textarea: React.FC<TextareaProps> = ({
  id = useId(),
  label,
  className,
  variant = "default",
  description,
  name,
  placeholder,
  disabled = false,
  filled=true,
  leftSection,
  rightSection,
  ...props
}) => {
  const variantMap: Record<TextareaVariant, {input: string, description: string, filled: string}> = {
    error: {
      input: 'bg-red-50 focus:bg-white border-red-300 focus:border-red-500',
      filled: 'bg-red-50',
      description: 'text-red-500',
    },
    default: {
      input: 'border-gray-300 focus:bg-white hover:border-gray-900 focus:border-gray-500',
      filled: 'bg-gray-100',
      description: 'text-zinc-500',
    },
    success: {
      input: 'bg-green-50 focus:bg-white border-green-300 hover:border-green-900 focus:border-green-500',
      filled: 'bg-green-50',
      description: 'text-green-500',
    },
    warning: {
      input: 'bg-orange-50 focus:bg-white border-orange-300 hover:border-orange-900 focus:border-orange-500',
      filled: 'bg-orange-50',
      description: 'text-orange-500',
    },
  }
  const classes = variantMap[variant]
  const inputClasses = `transition duration-200 placeholder:text-gray-400 
                        focus:ring-4
                        text-gray-900 
                        py-2.5 px-3.5
                        w-80 max-w-full
                        focus:ring-0 disabled:border-gray-200
                        disabled:bg-transparent
                        disabled:cursor-not-allowed
                        ${classes.input}
                        ${leftSection ? 'pl-14' : ''}
                        ${rightSection ? 'pr-14' : ''}
                        ${filled ? 'border-0 border-b rounded-none' + classes.filled : 'border rounded-lg'}
                        `
  return (
    <div className={"input-group mb-3"}>
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
        <textarea {...props} placeholder={placeholder} id={id} name={name} className={cn(className, inputClasses)} disabled={disabled}/>
        {rightSection && (
          <label htmlFor={id} className={"input-right-section absolute items-center right-0 top-0 flex justify-center h-full w-14"}>
            { rightSection }
          </label>
        )}
      </div>
      <span className={`${classes.description} flex gap-2 items-center text-sm mt-2`}>{description}</span>
    </div>
  );
};

export default Textarea;
