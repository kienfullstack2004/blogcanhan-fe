import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "antd/es/card/Card";
import { Context } from "@/App";
import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import {Tag} from "antd";
import Meta from "antd/es/card/Meta";

const Search = () => {
  const [postAll, setPostAll] = useState([]);
  const url = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(`${url}admin/search/${id}`);
 
      // console.log(responsive) 
       
      responsive?.data?.success === 0 && setPostAll(responsive?.data?.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Flex vertical>
        {postAll?.map((item) => {
          return (
            <NavLink key={item?.id} to={`/detail/${item?.id}`}>
              <Card hoverable>
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
      </Flex>
    </div>
  );
};

export default Search;
