import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import SearchBox from "../Search/SearchBox";

const Header = () => {
  const [valueSearch, setValueSaerch] = useState({
    search: "",
  });

  const navigate = useNavigate();

  const handleSearch = (e) => {

    if(e.which === 13){
      navigate("/search/" + valueSearch.search);
    }
  };

  return (
    <div className="flex items-center gap-2 justify-between">
      <ul className="inline-block list-none">
        <NavLink to={""}>
          <li className="font-medium inline-block px-4 hover:text-blue-500 font-mono uppercase text-white">
            DavidKien.
          </li>
        </NavLink>
        <NavLink to={"/bai-viet"}>
          <li className="font-medium inline-block px-4 hover:text-blue-500 font-mono uppercase text-white">
            Bài viết
          </li>
        </NavLink>

        
      </ul>
      <div className="flex gap-2 w-[300px]">
        <SearchBox
          setValue={setValueSaerch}
          value={valueSearch.search}
          type={"search"}
          onKeyDown={handleSearch}
          textSearch={"Enter text to search ..."}
        />
      </div>
    </div>
  );
};

export default Header;
