import React from 'react'

const forgotpassword = () => {
    return <>
        <form className='form-fgp d-flex flex-column'>
            <div className='fgp-details'>Đặt lại mật khẩu</div>
            <input className='input1 mb-4' type="text" placeholder='Tên tài khoản' autoComplete='off' name='phoneOrEmail' />
        </form>
    </>
}

export default forgotpassword
