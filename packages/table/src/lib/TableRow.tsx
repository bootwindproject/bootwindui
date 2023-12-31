import React from "react";
import { cn } from "@bootwind/common"

export const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => (
    <>
        <tr
            ref={ref}
            className={cn("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
            {...props}
        >
          {children}
        </tr>
    </>
))