import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Yohaku+ Button Variants
 * 
 * Design rules:
 * - Primary action can be filled using muted Moss accent
 * - Radius: 14-18px (rounded-xl)
 * - No shadow; subtle border or slight tint difference
 * - Hover: 1-2% darken + 1px downward
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[#6F846F]/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-[#6F846F] text-[#FAFAF8] hover:bg-[#5F7460] border border-[#6F846F]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[#E6E6E1] bg-[#FAFAF8] hover:bg-[#EEF3EF] hover:border-[#6F846F]/40 text-foreground",
        secondary:
          "bg-[#F2F4F3] text-foreground hover:bg-[#EEF3EF] border border-transparent",
        ghost:
          "hover:bg-[#EEF3EF] hover:text-foreground",
        link: "text-[#6F846F] underline-offset-4 hover:underline",
        // Yohaku+ specific: tinted container style (preferred over colored buttons)
        tinted: "bg-[#EEF3EF] text-foreground hover:bg-[#E4EBE5] border border-transparent",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-xl gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 rounded-xl px-7 has-[>svg]:px-5",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
