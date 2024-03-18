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
      <div className="relative w-full h-40 my-4">
        <Image src={item.image} alt={item.title} fill objectFit="contain" />
      </div>
      <div className="flex justify-center  min-h-20">
        <p className="w-11/12 font-bold text-1xl my-4 line-clamp-2 cursor-pointer">
          {item.title}
        </p>
      </div>
      <div className="flex justify-center">
        <p className="w-11/12 font-bold text-2xl ">
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div className="w-full flex justify-center my-4">
        <Button className="w-11/12 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" variant="outline">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
