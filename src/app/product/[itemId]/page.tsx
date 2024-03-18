import { getSingleProduct } from "@/services/get-data";
import Image from "next/image";

interface ProductInterface {
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

export default async function Page({ params }) {
  const product: ProductInterface = await getSingleProduct(params.itemId);

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.image} alt={product.description} width={300} height={300}/>
    </>
  );
}

export async function generateMetadata({ params }) {
  const product = await getSingleProduct(params.itemId);

  return {
    title: product.title,
    description: product.description,
  };
}
