import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('https://nammayatri.in/img/homeBg.png')",
        backgroundSize: "cover",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    ),
  },
  {
    path: "/book",
    element: (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
          <Header />
          <AboutUs />
          <Footer />
      </>
    )
  }
]);

export default App;
