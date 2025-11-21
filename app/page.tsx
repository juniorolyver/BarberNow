import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <main>
      <Header />
      <div className="space-y-4 p-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vm"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do joão"
          barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
          date={new Date()}
        />

        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do joão"
          barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
          date={new Date()}
        />

        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do joão"
          barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
          date={new Date()}
        />

        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="[&:;-webkit-scrollbar]:hidden flex gap-4 overflow-x-auto">
          {recommendedBarbershops.map((barbershop) => (
            // <h1 key={barbershop.id}>{barbershop.name}</h1>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-foreground text-xs font-semibold uppercase">
          Populares
        </h2>
        <div className="[&:;-webkit-scrollbar]:hidden flex gap-4 overflow-x-auto">
          {popularBarbershops.map((barbershop) => (
            // <h1 key={barbershop.id}>{barbershop.name}</h1>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
