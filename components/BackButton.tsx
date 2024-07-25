import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className="text-grey-500 hover:underline flex item-center
       gap-1 font-bold mb-5 text-lg "
    >
      <ArrowLeftCircle size={26} /> {text}
    </Link>
  );
}

export default BackButton;
