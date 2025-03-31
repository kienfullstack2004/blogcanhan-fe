import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Input, Typography } from "antd";
import { toast } from "react-toastify";
("");
const PostUpdate = () => {
  const { id } = useParams();

  const navigator = useNavigate();

  const [payloadUpdate, setPayloadUpadte] = useState({
    title: "",
    des: "",
    image: "",
    link: "",
    tag: "",
    code: "",
  });

  useEffect(() => {
    const handleOnePost = async () => {
      const responsive = await axios.get(
        `http://localhost:5000/admin/getonepost/` + id
      );
      setPayloadUpadte(responsive?.data?.data);
    };
    handleOnePost();
  }, []);

  const handleUpdate = async () => {
    if (
      payloadUpdate.code !== "" &&
      payloadUpdate.des !== "" &&
      payloadUpdate.image !== "" &&
      payloadUpdate.link !== "" &&
      payloadUpdate.title !== "" &&
      payloadUpdate.tag !== ""
    ) {
      const file = new FormData();

      // console.log(payloadUpdate)

      file.append("my_file", payloadUpdate.image);

      const res = await axios.post(`http://localhost:5000/admin/upload`, file);

      payloadUpdate.image = res?.data?.imageUrl;

      console.log(payloadUpdate.image);

      const responsive2 = await axios.post(
        `http://localhost:5000/admin/updatepost/` + id,
        payloadUpdate
      );
      responsive2?.data?.success === 0 && toast.success("Cập nhật thành công");
      responsive2?.data?.success === 0 &&
        setTimeout(() => {
          responsive2?.data?.success === 0 && navigator("/bai-viet");
        }, 1000);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>
          Tiêu đề
        </Typography>
        <Input
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, title: e.target.value }))
          }
          value={payloadUpdate.title}
          placeholder="Nhập tiêu đề của bài viết ..."
        />
      </div>
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>Tag</Typography>
        <Input
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, tag: e.target.value }))
          }
          value={payloadUpdate.tag}
          placeholder="Nhập tiêu đề của bài viết ..."
        />
      </div>
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>Mô tả</Typography>
        <textarea
          value={payloadUpdate.des}
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, des: e.target.value }))
          }
          className="resize-none outline-none w-full border border-[#ccc] rounded-md p-4
           h-[300px]
          "
          spellCheck={false}
          placeholder="Nhập mô tả của bài viết ..."
        ></textarea>
      </div>
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>Link</Typography>
        <Input
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, link: e.target.value }))
          }
          value={payloadUpdate.link}
          placeholder="Nhập đường dẫn của bài viết ..."
        />
      </div>
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>Mã</Typography>
        <Input
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, code: e.target.value }))
          }
          value={payloadUpdate.code}
          placeholder="Nhập mã của bài viết ..."
        />
      </div>
      <div>
        <Typography className={"my-4 text-[20px] font-bold"}>Ảnh</Typography>
        <Input
          type="file"
          onChange={(e) =>
            setPayloadUpadte((prev) => ({ ...prev, image: e.target.files[0] }))
          }
        />
      </div>

      <Button className="my-4" onClick={handleUpdate} type="primary">
        Cập nhật
      </Button>
    </div>
  );
};

export default PostUpdate;
