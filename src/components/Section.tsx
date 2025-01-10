// components/Section.tsx
import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
  className?: string;
}
function Section({
  title,
  className = "",
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className={cn("flex gap-x-8", className)}>
      <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">{title}</h2>
      <div className="flex-grow text-[#7c584a]">{children}</div>
    </div>
  );
}

export default Section;
