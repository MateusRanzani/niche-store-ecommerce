import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReactStars from "react-stars";
import Link from "next/link";

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
    <div className="w-full h-auto p-4 rounded border border-[#ECECEC] ">
      <div className="relative w-full h-40 my-4">
        <Image
          src={item.image}
          alt={item.title}
          style={{ objectFit: "contain" }}
          fill
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <p className="w-12/12 font-bold text-1xl my-4 line-clamp-2 cursor-pointer md:min-h-[3rem]">
          {item.title}
        </p>

        <ReactStars
          count={5}
          value={item.rating.rate}
          size={18}
          edit={false}
          color1={"#ECECEC"}
          color2={"black"}
        />

        <p className="w-12/12 font-bold text-2xl ">
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>

        <div className="w-full my-4">
          <Link
            className="w-full flex justify-center font-semibold"
            href={`/product/${item.id}`}
          >
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
              variant="outline"
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
