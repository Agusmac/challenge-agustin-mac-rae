import React from 'react'

const Card = ({ noDisplayMobile }) => {
    return (
        <div className={`card ${noDisplayMobile? 'noDisplay':''}`}>
            <div className='generic-bg'></div>
            <div className='textdiv'>
                <p>February 21, 2020</p>
                <h3 className='spacerTop'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</h3>
                <p className='semibold spacerTop2'>READ MORE</p>
            </div>
        </div>
    )
}

export default Card