import React, { useEffect, useState } from "react";
import { Button, Col, Space, Table } from "antd";
const { Column } = Table;
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
("");
const Post = () => {
  const navigator = useNavigate();
  const [postAll, setPostAll] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(
        `http://localhost:5000/admin/getallpost`
      );
      // console.log(responsive?.data?.data);
      setPostAll(responsive?.data?.data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const fetchDelete = async () => {
      const responsive = await axios.delete(
        `http://localhost:5000/admin/deletepost/${id}`
      );
      responsive?.data?.success === 0 && toast.success("Xoá thành công !");
      responsive?.data?.success === 0 &&
        setTimeout(() => {
          responsive?.data?.success === 0 && location.reload();
        }, 1000);
    };

    fetchDelete();
  };

  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={() => navigator("create")}
          className="my-6"
        >
          Tạo bài mới
        </Button>
      </div>
      <Table dataSource={postAll}>
        <Column
          className="text-[#ccc]"
          title="STT"
          dataIndex={"id"}
          render={(_, src) => {
            return <Space>{src.id.slice(0, 10) + `...`}</Space>;
          }}
        />
        <Column
          title="Tiêu đề"
          dataIndex={"title"}
          key={"title"}
          render={(_, src) => {
            return (
              <Space>
                <h1 className="font-semibold">
                  {src.title.length > 20
                    ? src.title.slice(0, 20) + `...`
                    : src.title}
                </h1>
              </Space>
            );
          }}
        />
        <Column
          title="Mô tả"
          dataIndex={"des"}
          key={"des"}
          render={(_, src) => {
            return (
              <Space>
                <p>
                  {src.des.length > 20
                    ? src?.des.slice(0, 20) + `...`
                    : src.des}
                </p>
              </Space>
            );
          }}
        />
        <Column
          title="Tag"
          dataIndex={"tag"}
          key={"tag"}
          render={(_, src) => {
            return (
              <Space>
                <Tag color="blue">{src?.tag}</Tag>
              </Space>
            );
          }}
        />
        {/* <Column title="Liên kết" dataIndex={"link"} key={"link"} /> */}
        <Column
          title="Ảnh"
          dataIndex={"image"}
          key={"image"}
          render={(_, src) => {
            return (
              <Space>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  alt="logo"
                  src={src.image}
                />
              </Space>
            );
          }}
        />
        <Column
          title="Ngày tạo"
          dataIndex={"code"}
          key={"code"}
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
          dataIndex={"code"}
          key={"code"}
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
              <Space>
                <Button
                  onClick={() => navigator(`edit/${src.id}`)}
                  color="primary"
                >
                  Sửa
                </Button>
                <Button onClick={() => handleDelete(src.id)} color="danger">
                  Xoá
                </Button>
              </Space>
            );
          }}
        />
      </Table>
    </div>
  );
};

export default Post;
