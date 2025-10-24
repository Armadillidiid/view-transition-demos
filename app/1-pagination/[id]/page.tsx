import { products } from "@/lib/products";
import { default as PageClient } from "./page-client";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  "use cache";

  const { id } = await props.params;
  return <PageClient productId={id} products={products} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    params: { id: product.id },
  }));
}
