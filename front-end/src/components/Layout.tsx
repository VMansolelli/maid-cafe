import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#2A1911]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
