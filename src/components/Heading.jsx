import React from 'react'


function Heading({ textOne, textTwo }) {
    return (
        <>
            <div
                className="heading-number"
            >
                <h1>{textOne}  <span className="number-gredient">{textTwo}</span></h1>
            </div>

        </>
    )
}

export default Heading

