import Image from "next/image";
import lain from "@/public/lain.jpg";

export function Background({ dim = false }: { dim?: boolean }) {
  return (
    <div className={`bg ${dim ? "bg--dim" : ""}`} aria-hidden="true">
      <Image
        src={lain}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="bg-img"
      />
      <div className="bg-scrim" />
      <div className="bg-scanlines" />
      <div className="bg-grain" />
    </div>
  );
}
