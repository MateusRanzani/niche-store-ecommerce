"use client";
import { PropsInteface } from "@/interfaces/RecommendedsInterface";
import Card from "@/components/card/Card";

export const Recommendeds = ({ items, itemId }: PropsInteface) => {
  //Filtro para mostrar itens da mesma categoria, menos o que está sendo visualizado
  const recommendedItems = items.filter((item) => item.id !== itemId);

  return (
    <div className="text-center mt-12">
      <p className="font-bold text-4xl mb-12">Recommendeds</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-4 gap-x-4">
        {recommendedItems.map((item, secondIndex) => {
          return <Card {...item} key={secondIndex} />;
        })}
      </div>
    </div>
  );
};
