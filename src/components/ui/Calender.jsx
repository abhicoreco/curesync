import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./ButtonVariants"

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-4 rounded-xl bg-white shadow-md", className)}
        classNames={{
          months: "flex flex-col sm:flex-row gap-4",
          month: "space-y-4",
          caption: "flex justify-between items-center px-2",
          caption_label: "text-base font-semibold",
          nav: "flex items-center gap-2",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-full transition"
          ),
          table: "w-full border-separate border-spacing-y-1",
          head_row: "flex justify-between",
          head_cell: "text-gray-400 text-xs w-8 text-center",
          row: "flex justify-between",
          cell: cn(
            "w-8 h-8 flex items-center justify-center relative text-sm",
            "transition-all duration-200 ease-in-out",
            props.mode === "range"
              ? "[&:has(>.day-range-start)]:rounded-l-full [&:has(>.day-range-end)]:rounded-r-full"
              : "[&:has([aria-selected])]:rounded-full"
          ),
          day: cn(
            "rounded-full h-8 w-8 flex items-center justify-center text-sm",
            "hover:bg-gray-200 focus:bg-gray-300",
            "aria-selected:bg-primary aria-selected:text-white"
          ),
          day_range_start: "bg-primary text-white rounded-l-full",
          day_range_end: "bg-primary text-white rounded-r-full",
          day_selected: "bg-primary text-white",
          day_today: "border border-primary text-primary",
          day_outside: "text-gray-300",
          day_disabled: "opacity-40",
          day_range_middle: "bg-primary/20 text-primary",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
        }}
        {...props}
      />
    )
  }
  
Calendar.displayName = "Calendar"

export { Calendar }
