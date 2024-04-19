import React from 'react'
import { Link } from 'react-router-dom';
const home = () => {
    return <>
        <div className='side-bar-container'>
            <div className="side-bar">
                <div className='sidebar-menu'>
                    <Link className='edit-link' to={'/order'}>Đơn hàng</Link>
                </div>
                <div className='sidebar-menu'>
                    <Link className='edit-link' to={'/'}>Sản phẩm</Link>
                </div>
            </div>
        </div>
    </>
}

export default home
