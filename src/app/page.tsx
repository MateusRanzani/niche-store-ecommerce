"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Swipper } from "@/components/swipper/Swipper";
import Image from "next/image";
import Card from "@/components/card/Card";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
// import useSWR from 'swr'

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDataSegments() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch segments");
  }

  return res.json();
}

async function getFindByCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function Component() {
  const datat = await getData();
  const segments = await getDataSegments();

  // const URL = "https://fakestoreapi.com/products/category/jewelery"
  // const {data, error, isLoading} = useSWR(URL, fetcher)

  // console.log(data, 'data');

  const countItemsBySegments = (segment: string) => {
    const array = datat.filter((item) => item.category === segment);

    return array.length;
  };

  return (
    <main className="grid gap-12">
      <div className="container px-4 md:px-6 w-full">
        <Swipper />
        <section>
          <div className="text-center pt-12">
            <p className="font-bold text-3xl">BESTS HIGHLIGHTS</p>

            <p className="text-[#999999]">Explore our highlights</p>
          </div>

          <div className="w-full bg-[#ECECEC]  mb-12 mt-4 p-4 flex justify-center">
            <div className="w-5/12 flex justify-between">
            {segments.map((segment, index) => (
              <Button variant="ghost" key={index}>
                {capitalizeFirstLetter(segment)}
                <Badge className="ml-2">{countItemsBySegments(segment)}</Badge>
              </Button>
            ))}
            </div>
          </div>

          {segments.map(async (segment, index) => {
            const itensByCategory = await getFindByCategory(segment);
            return (
              <div key={index}>
                <p className="font-bold text-2xl mb-12">
                  {capitalizeFirstLetter(segment)}
                </p>
                <div className="grid grid-cols-4  gap-y-24 gap-x-4">
                  {itensByCategory.map((item, secondIndex) => (
                    <Card {...item} key={secondIndex} />
                  ))}
                </div>

                <div className="flex justify-center my-12">
                  <Button className="w-6/12" variant="secondary">
                    View More
                  </Button>
                </div>
              </div>
            );
          })}

          {/*  */}
        </section>
      </div>
    </main>
  );
}
