import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import axios from "axios";
const { Dragger } = Upload;
import { PoweroffOutlined, SyncOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { useContext } from "react";
import { Context } from "@/App";

const DeleteActive = () => {
  const [isLoading, setLoading] = useState(true);

  const [image, setImage] = useState([]);


   const url = useContext(Context);

  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      let arrList = [];
      if (status !== "uploading") {
        for (var i = 0; i < info.fileList.length; i++) {
          arrList.push(info.fileList[i].originFileObj);
        }
        setImage(arrList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handdleImage = async () => {
    let file = image;
    if (image?.length > 0) {
      setLoading(!isLoading);
    }

    for (var i = 0; i < file.length; i++) {
      let data = new FormData();
      data.append("my_file", file[i]);
      let res = await axios.post(`${url}admin/upload`, data);
      if (res?.data?.success === 0) {
        const responsive = await axios.post(
          `${url}admin/createactive`,
          { image: res?.data?.imageUrl }
        );
        if (i === file.length - 1) {
          responsive?.data?.success === 0 && history.back();
          responsive?.data?.success === 1 && setLoading(!isLoading);
        }
      }
    }
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>

      <Flex vertical>
        <div className="my-4">
          {isLoading ? (
            <Button onClick={handdleImage} type="primary">
              Tạo banner
            </Button>
          ) : (
            <Button type="primary" loading>
              Tạo banner
            </Button>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default DeleteActive;
