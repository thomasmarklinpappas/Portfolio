"use client";

import * as React from "react";

interface ModalTriggerProps {
  children: React.ReactNode;
}

export function ModalTrigger({ children }: ModalTriggerProps) {
  return <>{children}</>;
} 