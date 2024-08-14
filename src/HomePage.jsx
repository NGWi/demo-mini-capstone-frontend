import { Link } from "react-router-dom";
// import { Test } from "./Test";

export function HomePage() {
  const testText = "Passed test.";
  console.log(testText)
  return (
    <div className="border-solid border-2 border-indigo-800 bg-white shadow-xl bg-opacity-50 text-center text-4xl p-4 ">
      {/* <Test text={testText}/> */}
      <h1 className="text-2xl font-bold mb-4">Welcome to the products app!</h1>
      <p className="mb-4">This is a sample app that allows you to manage products.</p>
      <p className="mb-4">You can create, read, update, and delete products.</p>
      <p className="mb-4">To get started, you can <Link to="/products" className="font-bold text-blue-600 hover:text-blue-800">browse all products</Link> or <Link to="/products/new" className="font-bold text-blue-600 hover:text-blue-800">create a new product</Link>.</p>
    </div>
  );
}