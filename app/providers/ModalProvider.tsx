// "use client";

// export const ModalProvider = () => {
//   useEffect(() => {
//     Modal.setAppElement("body");
//   }, []);

//   return null;
// };

"use client";

// import Modal from "react-modal";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  // useEffect
} from "react";

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  content: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [
    content,
    // setContent
  ] = useState("");

  const openModal = () => {
    // setContent(newContent);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, content }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
};
