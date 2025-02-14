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
    <div className={cn("flex w-full gap-x-8", className)}>
      <div className="flex flex-col gap-y-1">
        <h2 className="font-bold text-3xl text-[#5c4033] min-w-52">{title}</h2>
        {title === "Skills" && (
          <h3 className="font-semibold text-xl text-[#5c4033] opacity-50">
            Hard & Soft
          </h3>
        )}
      </div>

      <div className="flex-grow text-[#7c584a]">{children}</div>
    </div>
  );
}

export default Section;
