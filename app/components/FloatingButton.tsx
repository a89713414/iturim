import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../config/config.json";

export const FloatingButton = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${config.phoneWhatsApp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="whatsapp"
    >
      <span className="fixed bottom-10 right-10 z-50 cursor-pointer">
        <span
          className="absolute inset-0 rounded-full animate-ping border-1 border-green-500 opacity-75"
          style={{ animationDuration: "2s" }}
        />

        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
        </span>
      </span>
    </a>
  );
};
