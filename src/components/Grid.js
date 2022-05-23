import React from 'react'
import Card from './Card'

const Grid = () => {
    return (
        <div className='gridder'>
            <Card />
            <Card noDisplayMobile={true}/>
            <Card noDisplayMobile={true}/>
        </div>
    )
}

export default Grid