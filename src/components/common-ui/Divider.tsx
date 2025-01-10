interface DividerProps {
  thickness?: "lg" | "md" | "sm";
  mt?: "lg" | "md" | "sm" | "none";
  mb?: "lg" | "md" | "sm" | "none";
}

function Divider({ thickness = "sm", mt = "sm", mb = "sm" }: DividerProps) {
  const thicknessClass =
    thickness === "lg"
      ? "border-t-4"
      : thickness === "md"
      ? "border-t-2"
      : "border-t";
  const marginTopClass =
    mt === "lg" ? "mt-6" : mt === "md" ? "mt-4" : mt === "sm" ? "mt-2" : "";
  const marginBottomClass =
    mb === "lg" ? "mb-6" : mb === "md" ? "mb-4" : mb === "sm" ? "mb-2" : "";

  return (
    <div
      className={`w-full border-opacity-50 border-[#d1c3b4] ${thicknessClass} ${marginTopClass} ${marginBottomClass}`}
    ></div>
  );
}

export default Divider;
