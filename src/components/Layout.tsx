import React, { ReactNode } from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>
        <Head>
          <meta />
        </Head>
        <main>
          <div className="flex flex-row ">
            <Sidebar />

            <div className="w-9/12">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
