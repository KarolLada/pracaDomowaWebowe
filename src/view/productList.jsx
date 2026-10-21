import ProductCard from "../components/ProductCard";

function productList({ produkty }) {
  return (
    <div className="products">
      {produkty.map((produkt) => (
        <ProductCard key={produkt.id} {...produkt} />
      ))}
    </div>
  );
}

export default productList;