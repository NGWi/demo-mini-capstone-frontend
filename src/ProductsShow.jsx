export function ProductsShow({ product, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product.id, params, () => event.target.reset());
  };
  console.log(product.price.toFixed(2));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {parseFloat(product.price).toFixed(2)}</p>
      <p>{product.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          handle Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={parseFloat(product.price).toFixed(2)} name="price" type="text" />
        </div>
        <div>
          Description: <input defaultValue={product.description} name="description" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(product.id)}>Destroy</button>
    </div>
  );
}
