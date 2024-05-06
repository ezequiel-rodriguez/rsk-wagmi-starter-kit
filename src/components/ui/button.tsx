import { cn } from "@/lib/utils";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full border bg-black min-w-[100px] border-white px-5 py-2 text-[18px] font-medium z-4 relative hover:bg-white hover:text-black duration-300 after:content-[''] after:absolute after:h-full after:w-full after:border after:rounded-full after:border-white after:bg-black after:top-[6px] after:left-2 after:z-[-3]",
        props?.className
      )}
    >
      {props.children}
    </button>
  );
}
