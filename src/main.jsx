/* eslint-disable react-refresh/only-export-components */
import { useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./styles/App.css";
import NavbarLayout from "./pages/Header.jsx";
import FooterLayout from "./pages/Footer.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import { RouterProvider } from "react-router-dom";
import data from "./data/resume.json";
function Layout() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        rel="stylesheet"
      />
      <NavbarLayout resume={data} />
      <FooterLayout />
    </>
  );
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <About resume={data} SetTitlePage={SetTitlePage}   />,
      },
      {
        path: "cv",
        element: <CV resume={data} SetTitlePage={SetTitlePage} />,
      },
      {
        path: "projects",
        element: <Projects resumse={data} SetTitlePage={SetTitlePage}  />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

function SetTitlePage(title) {
  useEffect(() => {
    document.title = title;
  });
}