import axios from "axios";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
      },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
