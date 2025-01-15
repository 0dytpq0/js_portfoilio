import { useModal } from "@/context/ModalContext";
import { PropsWithChildren } from "react";

function Modal({ children }: PropsWithChildren) {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg h-[800px] w-screen m-20 overflow-auto">
        {children}
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
