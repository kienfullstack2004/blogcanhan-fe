import React, { useEffect, useState } from "react";
import "./style.css";
import { Card, Tag } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
import { useContext } from "react";
import { Context } from "@/App";

const Post = () => {
  const [postAll, setPostAll] = useState([]);

  const url = useContext(Context); 

  useEffect(() => {
    const handdleAllPosst = async () => {
      const responsive = await axios.get(
        `${url}admin/getallpost`
      );
      setPostAll(responsive?.data?.data);
    };
    handdleAllPosst();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-[30px] my-5">Bài viết cá nhân</h1>
        <div className="grid grid-cols-4 gap-7">
          {postAll?.map((item) => {
            return (
              <NavLink to={`/detail/${item?.id}`}>
                <Card hoverable key={item?.id}>
                  <div className="flex flex-col gap-2">
                    <img
                      src={item?.image}
                      alt="logo"
                      className="w-full h-[300px] object-cover"
                    />
                    <div>
                      <Tag className="my-3" color="blue">
                        {item?.tag}
                      </Tag>
                    </div>
                    <Meta
                      title={item?.title}
                      description={item?.des.slice(0, 50) + `...`}
                    />
                  </div>
                </Card>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
