import React, { useEffect, useState } from "react";
import "./style.css";
import { Button, Space, Table } from "antd";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
("");
const { Column } = Table;

const Active = () => {
  const [image, setImage] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(
        `http://localhost:5000/admin/getallactive`
      );
      responsive?.data?.success === 0 && setImage(responsive?.data?.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const responsive = await axios.delete(
      `http://localhost:5000/admin/deleteactive/` + id
    );
    responsive?.data?.success === 0 && toast.success("Xoá thành công");
    responsive?.data?.success === 0 &&
      setTimeout(() => {
        responsive?.data?.success === 0 && location.reload();
      }, 1000);
  };

  const handleDeleteAll = async () => {
    const responsive = await axios.delete(
      `http://localhost:5000/admin/deleteallactive`
    );
    responsive?.data?.success === 0 && toast.error("Đã xoá thành công");
    responsive?.data?.success === 0 && location.reload();
  };

  return (
    <div>
      <div className="flex gap-2">
        <Button
          onClick={() => navigator("banner")}
          className="my-4"
          type="primary"
        >
          Thêm banner mới
        </Button>
        <Button
          classNames=""
          onClick={handleDeleteAll}
          className="my-4"
          type="primary"
        >
          Xoá tất cả
        </Button>
      </div>
      <Table dataSource={image}>
        <Column
          title="Ảnh"
          dataIndex={"image"}
          render={(_, src) => {
            return (
              <Space>
                <img
                  src={src?.image}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </Space>
            );
          }}
        />
        <Column
          title="Ngày tạo"
          dataIndex={"createdAt"}
          render={(_, src) => {
            return (
              <Space>
                <p>{moment(src?.createdAt).format("LLL")}</p>
              </Space>
            );
          }}
        />
        <Column
          title="Ngày cập nhật"
          dataIndex={"updatedAt"}
          render={(_, src) => {
            return (
              <Space>
                <p>{moment(src?.updatedAt).format("LLL")}</p>
              </Space>
            );
          }}
        />
        <Column
          title="Chức năng"
          render={(_, src) => {
            return (
              <>
                <button
                  onClick={() => handleDelete(src.id)}
                  className="p-3 bg-red-500 rounded-md hover:cursor-pointer text-white"
                >
                  Xoá
                </button>
              </>
            );
          }}
        />
      </Table>
    </div>
  );
};

export default Active;
