import { useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { PropsWithChildren } from "react";
import { TiTimes } from "react-icons/ti";
import { RemoveScroll } from "react-remove-scroll";

function Modal({ children }: PropsWithChildren) {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <RemoveScroll>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onMouseDown={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="relative bg-[#f4f1ec] p-6 rounded-lg shadow-lg h-[80%] w-screen max-w-[900px] m-20 overflow-auto"
        >
          {children}
          <TiTimes
            onClick={closeModal}
            size={"40"}
            className="absolute top-4 right-4 cursor-pointer"
          />
        </div>
      </div>
    </RemoveScroll>
  );
}

export default Modal;
