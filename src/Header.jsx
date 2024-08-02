import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-500 hover:text-blue-800">Home</Link> | 
        <Link to="/products" className="text-blue-500 hover:text-blue-800">All products</Link> | 
        <Link to="/products/new" className="text-blue-500 hover:text-blue-800">New product</Link> | 
        <Link to="/signup" className="text-blue-500 hover:text-blue-800">Signup</Link> | 
        <Link to="/login" className="text-blue-500 hover:text-blue-800">Login</Link> | 
        <LogoutLink />
      </nav>
    </header>
  );
}