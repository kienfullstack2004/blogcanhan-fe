import React from "react";
import { Menu } from "antd";
import { HomeFilled, AccountBookFilled } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const MenuItem = () => {
  const navigator = useNavigate();

  return (
    <Menu theme="dark" className="p-2" mode={"inline"}>
      <Menu.Item onClick={() => navigator("")}>Trang chủ</Menu.Item>
      <Menu.Item
        onClick={() => navigator("bai-viet")}
        key={"bai-viet"}
        icon={<HomeFilled />}
      >
        Bài viết
      </Menu.Item>
      <Menu.Item
        onClick={() => navigator("hoat-dong")}
        key={"hoat-dong"}
        icon={<HomeFilled />}
      >
        Các hoạt động
      </Menu.Item>
    </Menu>
  );
};

export default MenuItem;
