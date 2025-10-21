import React from 'react'
import logo from '../../../assets/logo.png'

const GoodShiftLogo = () => {
    return (
        <div className="flex items-end">
            <img className='mb-2' src={logo} alt="logo" />
            <p className='text-3xl font-extrabold'>GoodShift</p>
        </div>
    )
}
export default GoodShiftLogo
