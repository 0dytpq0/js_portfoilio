import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  const isLeft = direction === "left";

  return (
    <div
      className={`absolute ${isLeft ? "left-[-50px]" : "right-4"} 
        top-1/2 -translate-y-1/2 z-10`}
    >
      {isLeft ? (
        <TiChevronLeft className="arrow-button" size={40} onClick={onClick} />
      ) : (
        <TiChevronRight className="arrow-button" size={40} onClick={onClick} />
      )}
    </div>
  );
};

export default ArrowButton;
