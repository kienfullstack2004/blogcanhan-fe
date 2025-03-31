import React from 'react'
import "./style.css";
import {Input} from 'antd';

const SearchBox = ({value,setValue,onKeyDown,textSearch,type,onClick}) => {
  
  return (
    <div className='w-full rounded-md flex items-center'>
       <Input.Search onKeyDown={onKeyDown} value={value} onClick={onClick} className='w-full outline-none' onChange={e=>setValue(prev=>({...prev,[type]:e.target.value}))} setValue placeholder={textSearch}/>  
    </div>
  )
}

export default SearchBox