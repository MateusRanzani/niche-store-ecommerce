"use client";
import { ProductInterface } from "@/interfaces/ProductInterface";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactStars from "react-stars";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProductItem = (product: ProductInterface) => {
  let [quantitySelected, setQuantitySelected] = useState(1);
  let [lineClampView, setLineClampView] = useState(false);
  let [lineClampClass, setLineClampClass] = useState("line-clamp-4");

  //Função para adicionar mais ou menos itens a compra
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

  //Função para abrir ou fechar descrição do item
  const handleClampLine = () => {
    if (lineClampClass === "line-clamp-4") {
      setLineClampClass("line-clamp-none");
    } else {
      setLineClampClass("line-clamp-4");
    }
  };

  //Função no carregamento inicial da página
  //Ela retorna se a descrição do item excedeu 4 linhas para disponibilizar o botão "Read more"
  useEffect(() => {
    function isStringExceedLineClamp(elementId) {
      const container = document.getElementById(elementId);
      return container!.scrollHeight > container!.clientHeight;
    }

    const isExceeded = isStringExceedLineClamp("container");

    if (isExceeded) {
      setLineClampView(true);
    } else {
      setLineClampView(false);
    }
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-2 md:py-12">
        <div className="relative w-12/12 md:w-11/12 h-96 md:h-[35rem] my-4 md:my-0 ">
          <Image
            src={product.image}
            alt={product.description}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl md:text-4xl">{product.title}</h1>

          <p id="container" className={`my-4 text-justify ${lineClampClass}`}>
            {product.description}
          </p>

          {lineClampView && (
            <p
              className="font-bold"
              onClick={() => {
                handleClampLine();
              }}
            >
              {lineClampClass === "line-clamp-4" ? "Read more" : "Read less"}
            </p>
          )}

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

          <div className="mt-4">
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

          <h1 className="font-bold text-4xl md:text-5xl py-8">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>

          <Button className="font-bold  text-base w-fit bg-blue-500 hover:bg-blue-600 text-white hover:text-white md:w-6/12 py-6 text-2xl w-full">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};
