import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the products app!</h1>
      <p className="mb-4">This is a sample app that allows you to manage products.</p>
      <p className="mb-4">You can create, read, update, and delete products.</p>
      <p className="mb-4">To get started, you can <Link to="/products" className="text-blue-500 hover:text-blue-800">browse all products</Link> or <Link to="/products/new" className="text-blue-500 hover:text-blue-800">create a new product</Link>.</p>
    </div>
  );
}