'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// Define button variants
const buttonVariants = {
  variant: {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-500',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500',
    ghost: 'text-slate-900 hover:bg-slate-100 focus:ring-slate-500',
    link: 'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500',
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3 text-sm',
    lg: 'h-11 rounded-md px-8 text-lg',
    icon: 'h-10 w-10',
  },
}

// Create proper interface that excludes conflicting animation props
interface ButtonProps extends Omit<
  HTMLMotionProps<'button'>, 
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    children,
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center rounded-md text-sm font-medium',
      'transition-colors duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'cursor-pointer'
    ].join(' ')

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
export { buttonVariants }
export type { ButtonProps }