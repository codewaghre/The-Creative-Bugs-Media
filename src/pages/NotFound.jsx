import React from 'react'
import { MdError } from "react-icons/md";

import { Link } from 'react-router-dom';

function notFound() {
    return (
        <>
            <div className="not-found">
                <MdError />
                <h1 className='back'>404 Page Not Found</h1>
                <Link to={"/"}>
                    Go Back Safely
                </Link>
            </div>
        </>
    )
}

export default notFound