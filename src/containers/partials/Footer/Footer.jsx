import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <h1 className="my-4 text-[20px] font-bold">Blog cá nhân</h1>
        <ul className="flex flex-col gap-3">
          <NavLink to={"/"}>
            <li className="text-[#000] ">Trang chủ</li>
          </NavLink>
          <NavLink to={"/"}>
            <li className="text-[#000]">Cá nhân</li>
          </NavLink>
          <NavLink to={"/"}>
            <li className="text-[#000]">Thông tin</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
