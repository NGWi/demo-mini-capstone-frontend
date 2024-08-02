export function ProductsIndex({ products, onShow }) {
  return (
    <div id="products-index">
      <h1>All products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => onShow(product)}>More info</button>
        </div>
      ))}
    </div>
  );
}
