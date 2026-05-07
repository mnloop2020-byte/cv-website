import { useEffect, useRef, useState, type ReactNode } from "react";
interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "left" | "right" | "fade";
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const initial: Record<string, string> = {
        up: "opacity-0 translate-y-8",
        left: "opacity-0 -translate-x-8",
        right: "opacity-0 translate-x-8",
        fade: "opacity-0",
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : initial[direction]} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}