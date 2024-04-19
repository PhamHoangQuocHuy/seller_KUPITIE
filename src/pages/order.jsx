import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Home from './home'
const order = () => {
    return <>
        <div className='d-flex pro-header'>
            <Home />
            <div className='d-flex'>
                <h2 className='mx-2 mt-2 '>Danh sách sản phẩm</h2>
                <button className='btn-add d-flex justify-content-center align-items-center'><AiOutlinePlus className='drop-down-icon'/>Tạo sản phẩm</button>
            </div>
        </div>
    </>
}

export default order
