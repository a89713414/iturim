"use client";

export const Map = ({ src }: { src: string }) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
