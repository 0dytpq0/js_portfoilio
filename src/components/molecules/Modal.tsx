import { useModal } from "@/context/ModalContext";
import { PropsWithChildren } from "react";
import { TiTimes } from "react-icons/ti";

function Modal({ children }: PropsWithChildren) {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[#f4f1ec] p-6 rounded-lg shadow-lg h-[800px] w-screen m-20 overflow-auto">
        {children}
        <TiTimes
          onClick={closeModal}
          size={"40"}
          className="absolute top-4 right-4"
        />
      </div>
    </div>
  );
}

export default Modal;
