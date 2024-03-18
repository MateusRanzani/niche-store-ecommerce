"use client";
import { ProductInterface } from "@/interfaces/ProductInterface";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import ReactStars from "react-stars";

export const ProductItem = (product: ProductInterface) => {
  let [quantitySelected, setQuantitySelected] = useState(1);

  const countQItems = () => {
    const items: any[] = [];

    for (let i = 1; i <= 5; i++) {
      items.push(
        <DropdownMenuItem
          key={i}
          className="cursor-pointer"
          onClick={() => setQuantitySelected(i)}
        >
          {i}
        </DropdownMenuItem>
      );
    }

    return items;
  };

  return (
    <section>
      <div className="grid md:grid-cols-2 py-12">
        <div className="relative w-11/12 h-[35rem]">
          <Image
            src={product.image}
            alt={product.description}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl">{product.title}</h1>

          <p className="py-4"> {product.description}</p>

          <div className="flex items-center">
            Rating: {product.rating.rate}
            <ReactStars
              count={5}
              value={product.rating.rate}
              size={24}
              edit={false}
              color1={"#ECECEC"}
              color2={"black"}
              className="px-4"
            />
          </div>

          <div className="my-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="font-bold  text-base ">
                  Qt: {quantitySelected}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>{countQItems()}</DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <h1 className="font-bold text-5xl py-8">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>

          <Button className="font-bold  text-base w-fit bg-blue-500 hover:bg-blue-600 text-white hover:text-white w-6/12 py-6 text-2xl mt-8">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};
