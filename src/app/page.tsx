import { Swipper } from "@/components/swipper/Swipper";
import { Highlights } from "@/components/layout/highlights/Highlights";
import { getData, getDataCategories } from "@/services/get-data";

export default async function Component() {
  const data = await getData();
  const categories = await getDataCategories();

  return (
    <main className="">
      <div className="container px-4 md:px-6">
        <Swipper />

        <Highlights data={data} categories={categories}/>
      </div>
    </main>
  );
}
