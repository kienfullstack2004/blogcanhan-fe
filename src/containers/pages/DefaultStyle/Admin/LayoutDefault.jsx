import React from "react";
import { Layout, Slider } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import MenuItem from "@/components/Menu/MenuItem";
import Logo from "@/components/Logo/Logo";
import HeaderComponent from "@/containers/partials/Header/Header";
import FooterComponent from "@/containers/partials/Footer/Footer";

const { Header, Footer, Content, Sider } = Layout;

const LayoutDefaul = () => {
  return (
    <div className="flex flex-col">
      <Layout>
        <Sider>
          <NavLink to={''}>
          <Logo /> 
          </NavLink>
          <MenuItem />
        </Sider>
        <Content>
          <Header>
            <HeaderComponent />
          </Header>
          <div className="w-[90%] my-9 m-auto">
            <Outlet />
          </div>
          <Footer>
            <FooterComponent />
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutDefaul;
