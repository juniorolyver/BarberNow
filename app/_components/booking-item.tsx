import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  date: Date;
}

const BookingItem = ({
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
}: BookingItemProps) => {
  return (
    <Card className="min-v-full flex w-full flex-row items-center justify-between p-0">
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Badge>Corfimation</Badge>
        <p className="font-bold">{serviceName}</p>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={barbershopImageUrl} />
          </Avatar>
          <p className="text-muted-foreground text-sm">{barbershopName}</p>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-2 border-l p-4">
        <p className="text-xs capitalize">
          {date.toLocaleDateString("pt-BR", { month: "long" })}
        </p>
        <p className="text-md font-bold capitalize">
          {date.toLocaleDateString("pt-BR", { day: "2-digit" })}
        </p>
        <p className="text-xs capitalize">
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
