"use client";
import Card from "@/components/card/Card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { useState } from "react";

export const Highlights = ({ data, categories }) => {
  //Estado criado para filtrar itens
  let [categoriesAux, setCategoriesAux] = useState(categories);

  //Função para quantificar produtos por categoria
  const countItemsByCategory = (category: string) => {
    const array = data.filter((item) => item.category === category);

    return array.length;
  };

  //Função de filtro pela categoria
  const filterByCategory = (categories: string) => {
    const removeSelected = categoriesAux.filter((item) => item !== categories);
    categoriesAux = [categories, ...removeSelected];
    setCategoriesAux(categoriesAux);
  };

  return (
    <section>
      <div className="text-center pt-12">
        <p className="font-bold text-4xl mb-2">BESTS HIGHLIGHTS</p>

        <p className="text-[#999999]">Explore our highlights</p>
      </div>

      <div className="w-full bg-[#f5f5f5]  mb-12 mt-4 p-4 flex justify-center">
        <div className="2-full grid grid-cols-2 md:w-fit 2xl:w-5/12 md:flex md:justify-between">
          {categories.map((categories, index) => (
            <Button
              variant="ghost"
              key={index}
              onClick={() => filterByCategory(categories)}
            >
              {capitalizeFirstLetter(categories)}
              <Badge className="ml-2">{countItemsByCategory(categories)}</Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Listagem de itens por categoria */}
      {categoriesAux.map((category, index) => {
        return (
          <div key={index}>
            <p className="font-bold text-2xl mb-12">
              {capitalizeFirstLetter(category)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4">
              {data.map((item, secondIndex) => {
                if (item.category === category) {
                  return <Card {...item} key={secondIndex} />;
                }
              })}
            </div>

            <div className="flex justify-center my-12">
              <Button className="w-6/12" variant="secondary">
                View More
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
