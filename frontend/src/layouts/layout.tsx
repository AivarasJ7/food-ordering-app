import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
