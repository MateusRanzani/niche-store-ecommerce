export default async function Page({ params }) {
  return <>{params.itemId}</>;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.itemId}`,
    description: "",
  };
}
