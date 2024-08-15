import axios from "axios";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://demo-mini-capstone-xskt.onrender.com";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Test } from "./Test";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";

const testText = "Passed test.";
const handleTestButton = () => {
  console.log("Test passed.")
}
const router = createBrowserRouter([
  { element: (
      <div  className="bg-cover bg-center fixed inset-0 overflow-y-auto bg-[url('https://as1.ftcdn.net/v2/jpg/05/34/20/46/1000_F_534204669_lFyotgs5MpmtRvpXZtY9r7zuNKcbW1XB.jpg')]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Test", element: <Test text={testText} onTestButton={handleTestButton} />},
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/products/new", element: <ProductsNewPage /> },
      { path: "/products", element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      { path: "/products/:id", element: <ProductsShowPage />,
        loader: ({ params }) =>  axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
