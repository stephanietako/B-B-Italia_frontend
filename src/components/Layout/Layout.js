import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Layout = ({ lang }) => {
  return (
    <main className="layout">
      <Outlet />
      <Footer lang={lang} />
    </main>
  );
};

export default Layout;
