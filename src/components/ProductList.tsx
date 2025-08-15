import ProductCard from "./ProductCard";

type ProductShowcase = {
  imageSrc: string;
  header: string;
  description: string;
  url: string;
};

export default function ProductList({ products }: { products: ProductShowcase[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}