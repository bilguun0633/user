import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-cyan-400">
      <div>
        <Head>
          <meta />
        </Head>
        <main>
          <div className="flex flex-row ">
            <Navbar />

            <div className="w-9/12 bg-slate-300 ">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
