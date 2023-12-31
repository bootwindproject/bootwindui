import React from "react";
import { cn } from "@bootwind/common"

interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  variant?: 'striped' | 'normal'
  borders?: 'all' | 'bottom' | "none"
}

export const Table = React.forwardRef<
    HTMLTableElement,
    TableProps
>(({ className, ...props }, ref) => {
  const borderClasses = {
    bottom: '[&_td]:border-b [&_td]:border-[#e9eff6] [&_th]:border-b [&_th]:border-[#e9eff6]',
    all: '[&_td]:border [&_td]:border-[#e9eff6] [&_th]:border [&_th]:border-[#e9eff6]',
    none: ''
  }
  return (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn(
              "w-full caption-bottom text-sm ", 
              className, 
              props.variant == "striped" ? '[&_tr:nth-child(even)]:bg-[#f9fafb]' : '',
              borderClasses[props.borders ?? 'bottom']
              )
            }
            {...props}
        />
    </div>
  )
})