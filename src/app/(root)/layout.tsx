import { ModalProvider } from "@/context/ModalContext";
import { PropsWithChildren } from "react";

function ProviderLayout({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default ProviderLayout;
