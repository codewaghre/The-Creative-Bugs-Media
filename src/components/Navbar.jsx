import React from 'react'
import Button from './Button'
import { TiArrowRight } from "react-icons/ti";
import { Link, useParams } from 'react-router-dom';



function Navbar() {

    return (
        <>
            <nav className='nav'>
                <div className='nav-container'>

                    <Link to={"/"}>
                        <div className='left-nav'>
                            <h1 className='logo'>
                                CreativeBugsMedia
                            </h1>
                        </div>
                    </Link>

                    <Link to={"/gallery"}>
                        <div className='right-nav'>
                            <Button text={"Our Impact  and Expertise's"} />
                        </div>
                    </Link>

                </div>


            </nav>
        </>
    )
}

export default Navbar