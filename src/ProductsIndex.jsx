export function ProductsIndex({ products, onShow }) {
  return (
    <div className="background-image" style={{ backgroundImage: `url(https://c8.alamy.com/comp/2H2TT99/full-stackjavascriptdeveloper-with-abstract-technology-binary-code-backgrounddigital-binary-data-and-secure-data-concept-software-2H2TT99.jpg)` }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border-solid border-2 border-indigo-800 bg-white shadow-xl rounded-lg p-4 bg-opacity-50">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Price: {product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
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
