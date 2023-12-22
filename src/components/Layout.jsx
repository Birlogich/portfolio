import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col h-full max-w-desktop px-[20px] bg-bg w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
