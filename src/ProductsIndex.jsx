export function ProductsIndex({ products, onShow }) {
  return (
    <div className="bg-cover bg-center fixed inset-0 overflow-y-auto" style={{ backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/05/34/20/46/1000_F_534204669_lFyotgs5MpmtRvpXZtY9r7zuNKcbW1XB.jpg)` }}>
      <h1 className="border-solid border-2 border-indigo-800 bg-white shadow-xl rounded-lg p-4 bg-opacity-50 text-center text-4xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border-solid border-2 border-indigo-800 bg-white shadow-xl rounded-lg p-4 bg-opacity-60">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">Price: {product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onShow(product.id)}
            >
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
