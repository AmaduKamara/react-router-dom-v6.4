import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BreadCrumbs from "../components/BreadCrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <BreadCrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
