import { toast } from "react-toastify";
import React, { createContext } from "react";
import { Form, Upload, Input, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import axios from "axios";
("");
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

const CreatePost = () => {
  const Context = createContext();

  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // const [image, setImage] = useState("");

  // console.log()

  const onFinish = async (values) => {
    const file = fileList[0].originFileObj;

    // console.log(file?.originFileObj)

    const form = new FormData();
    form.append("my_file", file);

    // console.log(form)

    const handle = async () => {
      const responsive = await axios.post(
        `http://localhost:5000//admin/upload`,
        form
      );
      if (responsive?.data?.success === 0)
        values.image = responsive?.data?.imageUrl;

      // console.log(values)
      const responsive2 = await axios.post(
        `http://localhost:5000/admin/createpost`,
        values
      );

      responsive2?.data?.success === 0 && toast.success("Đăng bài thành công");
      responsive2?.data?.success === 1 &&
        toast.error("Đăng bài không thành công");
      responsive2?.data?.success === 0 &&
        setTimeout(() => {
          responsive2?.data?.success === 0 && history.back();
        }, 1000);
    };

    handle();
    // values.image = image;

    // handle();
  };

  const onPreview = (file) =>
    __awaiter(void 0, void 0, void 0, function* () {
      let src = file.url;
      if (!src) {
        src = yield new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow === null || imgWindow === void 0
        ? void 0
        : imgWindow.document.write(image.outerHTML);
    });

  const handleImage = () => {};

  // console.log(image)

  return (
    <div>
      {/* <Context.Provider value={""}>
        {toast} */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label={"Tiêu đề"}
          name={"title"}
          id="name"
          rules={[{ required: true, message: "Nhập đầy đủ thông tin" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Tag"}
          name={"tag"}
          id="tag"
          rules={[{ required: true, message: "Nhập đầy đủ thông tin" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Đường dẫn"}
          name={"link"}
          id="link"
          rules={[{ required: true, message: "Nhập đầy đủ thông tin" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Mô tả"}
          name={"des"}
          id="des"
          rules={[{ required: true, message: "Nhập đầy đủ thông tin" }]}
        >
          <Input.TextArea classNames={'className="h-[300px] resize-none"'} />
        </Form.Item>
        <Form.Item
          label={"Mã"}
          name={"code"}
          id="code"
          rules={[{ required: true, message: "Nhập đầy đủ thông tin" }]}
        >
          <Input />
        </Form.Item>

        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>

        <Form.Item label={null}>
          <Button
            htmlType="submit"
            onClick={handleImage}
            className="my-5"
            type="primary"
          >
            Đăng bài
          </Button>
        </Form.Item>
      </Form>
      {/* </Context.Provider> */}
    </div>
  );
};

export default CreatePost;
