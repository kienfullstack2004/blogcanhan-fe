import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterComponent from "@/containers/partials/Footer/Footer";
import HeaderComponent from "@/containers/partials/Header/Header";

const { Header, Footer, Content } = Layout;

const LayoutCustomer = () => {
  return (
    <div className="">
      <Layout>
        <Header>
          <HeaderComponent />
        </Header>
        <Content className="w-[1200px] m-auto my-12">
          <Outlet />
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutCustomer;
