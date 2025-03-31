import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "antd/es/card/Card";
import CountUp from "react-countup";
import { Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
("");
const Admin = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [countActive, setActive] = useState(0);
  const [countPost, setPost] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const countActive = await axios.get(
        `http://localhost:5000/admin/countactive`
      );
      const countPost = await axios.get(
        `http://localhost:5000/admin/countpost`
      );

      countActive?.data?.success === 0 && setActive(countActive?.data?.count);
      countPost?.data?.success === 0 && setPost(countPost?.data?.count);
    };
    fetchCount();
  }, []);

  if (isLoggedIn === false) {
    return <Navigate to={"/"} />;
  } else
    return (
      <div className="">
        <div className=" mt-20 gap-9 grid grid-cols-3">
          <Card>
            <h1 className="font-bold text-2xl">Bài viết</h1>
            <span className="text-[#ccc] flex gap-2 items-center justify-center">
              <CountUp
                end={countPost}
                className="text-[50px] font-bold"
                duration={1}
              />
            </span>
          </Card>
          <Card>
            <h1 className="font-bold text-2xl">Banner</h1>
            <span className="text-[#ccc] flex gap-2 items-center justify-center">
              <CountUp
                end={countActive}
                className="text-[50px] font-bold"
                duration={1}
              />
            </span>
          </Card>
        </div>
        <div className="mt-4"></div>
      </div>
    );
};

export default Admin;
