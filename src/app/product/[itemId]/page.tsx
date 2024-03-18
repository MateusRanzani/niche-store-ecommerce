import { ProductInterface } from "@/interfaces/ProductInterface";
import { ProductItem } from "@/components/layout/product-item/ProductItem";
import { getSingleProduct } from "@/services/get-data";

export default async function Page({ params }) {
  const product: ProductInterface = await getSingleProduct(params.itemId);

  return (
    <main>
      <div className="container px-4 md:px-6">
        <ProductItem {...product} />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }) {
  const product = await getSingleProduct(params.itemId);

  return {
    title: product.title,
    description: product.description,
  };
}
