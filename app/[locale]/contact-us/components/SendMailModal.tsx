"use client";

import { useEffect } from "react";
import clsx from "clsx";

interface SendMailModalProps {
  type: "open-success" | "open-failed" | null;
  onClose: () => void;
}

export const SendMailModal = ({ type, onClose }: SendMailModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const message =
    type === "open-success"
      ? "Email sent successfully!"
      : "Failed to send email. Please try again.";

  return (
    <div
      className={clsx(
        "fixed top-36 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow text-white backdrop-blur-sm",
        type === "open-success" && "bg-green-600/70",
        type === "open-failed" && "bg-red-600/70"
      )}
    >
      {message}
    </div>
  );
};
