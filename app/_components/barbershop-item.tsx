import { Barbershop } from "../generated/prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div className="relative min-h-[200px] min-w-[290] rounded-xl">
      <div className="to-trabsparent absolute top-0 left-0 z-10 h-full w-full rounded-lg bg-linear-to-t from-black"></div>
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill
        className="rounded-xl object-cover"
      />
      <div className="letf-0 absolute bottom-0 z-20 p-4">
        <h3 className="text-background text-lg font-bold">{barbershop.name}</h3>
        <p className="text-background text-xs font-bold">
          {barbershop.address}
        </p>
      </div>
    </div>
  );
};

export default BarbershopItem;
