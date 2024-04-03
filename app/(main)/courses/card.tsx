import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className=" w-full flex justify-end items-center min-[24px]">
        {active && (
          <div className="bg-green-600 rounded-md p-1.5 flex items-center justify-center">
            <Check className="text-white size-4 stroke-[4]" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        width={93.33}
        height={70}
        className="rounded-lg drop-shadow-md border object-cover"
        alt={title}
      />
      <p className="text-neutral-700 text-center mt-3">{title}</p>
    </div>
  );
};
