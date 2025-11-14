import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'glass'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-dark-100/50 border border-gray-700',
      featured: 'bg-dark-100/50 border border-primary-500/20 hover:border-primary-500/40',
      glass: 'bg-dark-100/30 backdrop-blur-sm border border-gray-700/50'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg p-6 transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card