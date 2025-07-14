"use client";

import { useEffect } from "react";
import Modal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../providers/ModalProvider";
import { useTranslations } from "next-intl";
import { Button } from "./ui/Button";

export const ModalForm = () => {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const t = useTranslations("homepage.modal");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={clsx(
        "relative",
        "bg-white",
        "pt-12",
        "p-6",
        "mx-4",
        "rounded-lg",
        "w-[400px]",
        "h-[300px]"
      )}
      overlayClassName={clsx(
        "fixed",
        "inset-0",
        "bg-black/60",
        "z-9999",
        "flex",
        "items-center",
        "justify-center"
      )}
    >
      <div className={clsx("flex", "justify-center", "items-center", "h-[100%]")}>
        <form className="p-4 space-y-4 w-full">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {t("phoneLabel")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <Button title={t("btnTitle")} />
        </form>
      </div>

      <button
        onClick={closeModal}
        className={clsx(
          "absolute",
          "top-4",
          "right-4",
          "text-gray-500",
          "hover:text-gray-800",
          "hover:text-white",
          "focus:outline-none",
          "cursor-pointer"
        )}
      >
        <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
      </button>
    </Modal>
  );
};
