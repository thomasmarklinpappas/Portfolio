import { cn } from "@/lib/utils";

export function Heading({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <h2
            className={cn("text-center font-bold text-3xl text-foreground relative z-20", className)}
        >
            {text}
        </h2>
    );
}
