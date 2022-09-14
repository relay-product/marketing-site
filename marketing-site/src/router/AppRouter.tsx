import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/Main.layout";
import { About } from "../pages/about/About.page";
import { Home } from "../pages/home/Home.page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
