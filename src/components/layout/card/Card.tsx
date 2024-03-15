import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ItemInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Card = (item: ItemInterface) => {
  return (
    <div className="w-full h-auto	 rounded border border-[#ECECEC] ">
      <div className="relative w-full h-40">
        <Image src={item.image} alt={item.title} fill objectFit="contain" />
      </div>
      {item.title}

      {item.price}
      <br />
      <Button variant="outline">Buy Now</Button>
    </div>
  );
};

export default Card;
