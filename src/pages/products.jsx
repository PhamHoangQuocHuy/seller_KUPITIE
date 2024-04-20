import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import sp1 from '../assets/images/sp1.jpg'
import Home from './home'
const order = () => {
    return <>
        <div className='d-flex pro-header'>
            <Home />
            <h2 className='mx-4 mt-2 '>Danh sách sản phẩm</h2>
        </div>
        <div className='order-details'>
            <input className='py-2' type="text" name="madonhang" id="" placeholder='Nhập mã sản phẩm hoặc tên sản phẩm' />

            <div className="filters">
                <div className="filter">
                    <select className="filter-select">
                        <option value="">Đang kinh doanh</option>
                        <option value="shirts">Áo</option>
                        <option value="pants">Quần</option>
                    </select>
                </div>
            </div>

            <div className="filters">
                <div className="filter">
                    <select className="filter-select">
                        <option value="">Danh mục</option>
                        <option value="shirts">Áo</option>
                        <option value="pants">Quần</option>
                    </select>
                </div>
            </div>
            <div className="filters">
                <div className="filter">
                    <select className="filter-select">
                        <option value="">Nhà sản xuất</option>
                        <option value="shirts">Áo</option>
                        <option value="pants">Quần</option>
                    </select>
                </div>
            </div>


            <div className="d-flex flex-column">
                <button className='btn-add mb-4'><AiOutlinePlus className='add-icon' /> Tạo sản phẩm</button>
                <button className='btn-find mb-4'><BiSearch className='add-icon' /> Tìm kiếm</button>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr >
                        <th><input type="checkbox" name="" id="" /></th>
                        <th >Tên sản phẩm</th>
                        <th >Mã sản phẩm</th>
                        <th >Hình ảnh</th>
                        <th >SL</th>
                        <th >Giá</th>
                        <th >Danh mục</th>
                        <th >Nhà sản xuất</th>
                        <th >Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.status}</td>
                            <td>
                                <button className="btn-action">Sửa</button>
                                <button className="btn-action">Xóa</button>
                            </td>
                        </tr>
                    ))} */}
                    <tr >
                        <td><input type="checkbox" name="" id="" /></td>
                        <td >Slim Fit Dress Shirt</td>
                        <td >MP001</td>
                        <td ><img src={sp1} alt="" /></td>
                        <td >15</td>
                        <td >49.9$</td>
                        <td >Áo</td>
                        <td >Calvin Klein</td>
                        <td >
                            <button className="btn btn-primary">Sửa</button>
                            <button className="btn btn-danger mx-2">Xóa</button>
                        </td>
                    </tr>
                    <tr >
                        <td><input type="checkbox" name="" id="" /></td>
                        <td >Slim Fit Dress Shirt</td>
                        <td >MP001</td>
                        <td ><img src={sp1} alt="" /></td>
                        <td >15</td>
                        <td >49.9$</td>
                        <td >Áo</td>
                        <td >Calvin Klein</td>
                        <td >
                            <button className="btn btn-primary">Sửa</button>
                            <button className="btn btn-danger mx-2">Xóa</button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    </>
}

export default order
