import { Swipper } from "@/components/swipper/Swipper";
import { Highlights } from "@/components/layout/highlights/Highlights";
import { getData, getDataCategories } from "@/services/get-data";

export default async function Component() {
  //Fetch de dados usando SSR
  //Todos dados são carregados do lado do servidor
  const data = await getData();
  const categories = await getDataCategories();

  return (
    <main className="">
      <div className="container px-4 md:px-6">
        {/* Componente banner inicial */}
        <Swipper />
        {/* Componente de produtos em destaque */}
        <Highlights data={data} categories={categories} />
      </div>
    </main>
  );
}
