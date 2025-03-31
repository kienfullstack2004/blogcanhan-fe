import React, { useEffect, useState } from "react";
import "./style.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Tag } from "antd";
import { Context } from "@/App";
import { useContext } from "react";


const Detail = () => {
  const [postOne, setPostOne] = useState("");
   const url = useContext(Context);

  const { id } = useParams();

  const handBack = () => {
    history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${url}admin/getonepost/` + id
      );

      res?.data?.success === 0 && setPostOne(res?.data?.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-4 ">
        <ArrowLeftOutlined onClick={handBack} />
      </div>
      <h1 className="font-bold text-[30px] text-justify">{postOne?.title}</h1>
      <div className="flex justify-between p-5 border-b-gray-500 border-b-2 pb-3">
        <div className="flex items-center gap-3">
          <img
            src={postOne?.image}
            alt="logo"
            className="w-[50px] mt-4 h-[50px] rounded-full"
          />
        </div>
        <div className="flex gap-2 items-center text-[#ccc] text-[12px]">
          <div>
            <Tag color="blue">{postOne?.tag}</Tag>
          </div>
          <p>{moment(postOne?.createdAt).format("LLL")}</p>
          <p>{moment(postOne?.updatedAt).format("LLL")}</p>
        </div>
      </div>
      <div className="mt-5">
        <img
          src={postOne?.image}
          alt="logo"
          className="w-full h-[300px] rounded-md"
        />
      </div>
      <div className="mt-5 text-2xl ">{postOne?.des}</div>
      {/* <div></div> */}
    </div>
  );
};

export default Detail;
