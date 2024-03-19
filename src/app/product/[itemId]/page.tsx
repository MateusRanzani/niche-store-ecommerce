import { ProductInterface } from "@/interfaces/ProductInterface";
import { ProductItem } from "@/components/layout/product-item/ProductItem";
import { Highlights } from "@/components/layout/highlights/Highlights";
import { Recommendeds } from "@/components/layout/recommendeds/Recommendeds";
import {
  getData,
  getDataCategories,
  getFindByCategory,
  getSingleProduct,
} from "@/services/get-data";

//Rota dinamica
export default async function Page({ params }) {
  //Fetch de dados usando SSR
  //Todos dados são carregados do lado do servidor
  const product: ProductInterface = await getSingleProduct(params.itemId);
  const data = await getData();
  const categories = await getDataCategories();
  const categoryItems = await getFindByCategory(product.category);

  return (
    <main>
      <div className="container px-4 md:px-6">
        <ProductItem {...product} />

        <Recommendeds items={categoryItems} itemId={product.id} />

        <Highlights data={data} categories={categories} />
      </div>
    </main>
  );
}

//Metadata dinamica
export async function generateMetadata({ params }) {
  const product = await getSingleProduct(params.itemId);

  return {
    title: product.title,
    description: product.description,
    icons: {
      icon: {
        url: "/favicon.ico",
        type: "image/png",
      },
      shortcut: { url: "/favicon.png", type: "image/png" },
    },
  };
}
