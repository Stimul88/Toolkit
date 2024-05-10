import { Outlet } from "react-router-dom";
import {Header} from "../header/Header";

export const Layout = () => {
  return (
    <div className="site-container">
      <Header />
      <hr/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
