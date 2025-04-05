import React from 'react'
import { TiArrowRight } from "react-icons/ti";

function Button({ text, icon }) {
    return (
        <>
            <button className='nav-btn '>
                <span>{text}</span>
                {icon ? <TiArrowRight /> : ""}
            </button>
        </>
    )
}

export default Button