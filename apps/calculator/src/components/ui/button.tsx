import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "operator"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        const variants = {
            default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
            outline: "bg-blue-300 text-gray-900 hover:bg-blue-400",
            ghost: "hover:bg-gray-100",
            operator: "bg-[#bfcfb4] text-gray-900 hover:bg-[#a8bfa0] font-semibold",
        }

        const sizes = {
            default: "h-14 w-14 text-xl",
            sm: "h-10 w-10 text-base",
            lg: "h-16 w-16 text-2xl",
            icon: "h-14 w-14",
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"

export { Button }