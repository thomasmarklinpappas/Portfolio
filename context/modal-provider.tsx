"use client";

import * as React from "react";
import { Project } from "@/lib/types";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalData: Project | null;
  setModalData: (data: any) => void;
}

const ModalContext = React.createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<any>(null);

  return (
    <ModalContext.Provider value={{ open, setOpen, modalData, setModalData }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};