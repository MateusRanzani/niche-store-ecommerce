"use client";
import Card from "@/components/card/Card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useState } from "react";

export const Highlights = ({ data, categories }) => {
  let [segmentsAux, setSegmentsAux] = useState(categories);

  const countItemsBySegments = (segment: string) => {
    const array = data.filter((item) => item.category === segment);

    return array.length;
  };

  const filterBySegment = (categories: string) => {
    const removeSelected = segmentsAux.filter((item) => item !== categories);
    segmentsAux = [categories, ...removeSelected];
    setSegmentsAux(segmentsAux);
  };

  return (
    <section>
      <div className="text-center pt-12">
        <p className="font-bold text-3xl">BESTS HIGHLIGHTS</p>

        <p className="text-[#999999]">Explore our highlights</p>
      </div>

      <div className="w-full bg-[#ECECEC]  mb-12 mt-4 p-4 flex justify-center">
        <div className="2-full grid grid-cols-2 md:w-fit 2xl:w-5/12 md:flex md:justify-between">
          {categories.map((categories, index) => (
            <Button
              variant="ghost"
              key={index}
              onClick={() => filterBySegment(categories)}
            >
              {capitalizeFirstLetter(categories)}
              <Badge className="ml-2">{countItemsBySegments(categories)}</Badge>
            </Button>
          ))}
        </div>
      </div>

      {segmentsAux.map((segment, index) => {
        return (
          <div key={index}>
            <p className="font-bold text-2xl mb-12">
              {capitalizeFirstLetter(segment)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-24 gap-x-4">
              {data.map((item, secondIndex) => {
                if (item.category === segment) {
                  return <Card {...item} key={secondIndex} />;
                }
              })}
            </div>

            <div className="flex justify-center my-12">
              <Button className="w-6/12 bg-blue-500 hover:bg-blue-600 text-white hover:text-white" variant="secondary">
                View More
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
