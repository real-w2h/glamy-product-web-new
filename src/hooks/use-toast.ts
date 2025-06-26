"use client";

import { useState, useCallback } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
}



export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    ({ title, description, variant = "default" }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).substring(2);
      const newToast: Toast = {
        id,
        title,
        description,
        variant,
      };

      // For now, just log the toast (you can enhance this later with actual toast UI)
      console.log(`Toast: ${title} - ${description} (${variant})`);
      
      // Add to state for potential UI integration
      setToasts((prevToasts) => [...prevToasts, newToast]);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
      }, 5000);

      return { id };
    },
    []
  );

  const dismiss = useCallback((toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toastId));
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
} 