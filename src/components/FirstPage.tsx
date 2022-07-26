import React from 'react'
import "./FirstPage.css"
import { Link } from 'react-router-dom'

const FirstPage = () => {

  return (
    <div className='container'>
      <h1>S</h1>
      <div className='buttons'>
        <Link to={"./signin"} className='link'><div className='first'>ساخت حساب کاربری</div></Link>
        <Link to={"./login"} className='link'> <div>ورود</div></Link>
      </div>
    </div>
  )
}

export default FirstPage
